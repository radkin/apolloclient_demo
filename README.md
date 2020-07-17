# Apolloclient Demo
Every wonder what the difference is in price by region? This demo has fake data that will tell you! Simply line up your customer and location to see how much they spent in each region for the same product.

## Certified for use with:
* **node**: v12.18.2
* **npm**: v6.14.5
* **angular**: v10.0.4

## Up and Running
You will need a running instance of the apolloserver_demo before this Angular pure client has any data.

On your local environment install the angular CLI like this
`npm install -g @angular/cli@^10`
Also, it's a good idea for you to install the compiler cli as well
`npm install -g @angular/compiler-cli@^10`

see the "development_tools" directory for further information and useful files

### Starting and stopping
For now, when developing the following commands preferable in separate windows
on the command-line (tmux is good).
**Start**: `npm start`
**Stop**: `npm stop`

## Tests
### code coverage
npm run coverage
### Jasmine/Karma Tests
npm run ng-test-headless
