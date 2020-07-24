# Apolloclient Demo
Ever wonder what the difference is in price by region? This demo has fake data that will tell you! Simply line up your customer and location to see how much they spent in each region for the same product.

## Certified for use with:
* **node**: v12.18.2
* **npm**: v6.14.5
* **angular**: v10.0.4

## Up and Running
You will need a running instance of the apolloserver_demo before this Angular pure client has any data. Please remember to run the test to populate redis with data. For local laptop and a locally running instance of apolloserver there is no need to do anything else. If you are running in any other environment there needs to be a `./apolloclient_demo/.env` file with a single entry like this example:

```bash
APOLLO_SERVER="http://localhost:9000/api/graphql"
```

see the "development_tools" directory for further information and useful files

### Starting and stopping
For now, when developing the following commands preferable in separate windows
on the command-line (tmux is good).

**Start**: `npm start`
**Stop** `ctrl-c`

## Tests
* code coverage: `npm run coverage`
* Jasmine/Karma Tests
For local laptop: `npm run test`
For other environments: `npm run ng-test-headless`

### Linting
typescript: `npm run ng-lint`
all else: `npm run lint`
