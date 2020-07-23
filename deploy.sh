#!/bin/bash -x

# if MR is in review set to branch, else deploy master
BRANCH=$1
BRANCH="${BRANCH:-master}"
APP="apolloclient_demo"
echo "Deploying ${APP}"
cd $APP

# need to copy bashrc and make changes to source
if [ ! -f ~/deploy_bashrc ]; then
    cp ~/.bashrc ~/deploy_bashrc
    sed -i 1,9d ~/deploy_bashrc
fi
# gather all env vars for tools
source ~/deploy_bashrc > /dev/null 2>&1

# debug versioning information
node -v
npm -v

# prep for static prod build
git reset --hard
rm -Rf node_modules
echo "git pull of branch ${BRANCH}"
git pull origin $BRANCH
git checkout $BRANCH

rm package-lock.json
npm install

# prod optimzed static build
npm run build

# deploy build
cd /var/www/html
if [ ! -d /var/www/html/rollback ]; then
    mkdir /var/www/html/rollback
fi

ROLLBACK=`date +%F`-rollback-$APP.tar.gz
tar --exclude=rollback -cvzf $ROLLBACK .
mv $ROLLBACK ./rollback/

rm /var/www/html/*
rm -Rf /var/www/html/assets
cp -r /home/tools/indy/dist/artifacts/* /var/www/html/

cd ~/$APP

# Tests
## Angular code coverage
npm coverage
## Angular Jasmine/Karma Tests
npm ng-test-headless
