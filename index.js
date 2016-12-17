import express from 'express';
import graphQLHTTP from 'express-graphql';

import schema from './schema';
import championLoader from './loaders/champion';
import championsLoader from './loaders/champions';
import summonerLoader from './loaders/summoner';


// TODO: Set the region you wish to query against
const REGION = 'oce';

const app = express();

app.use(graphQLHTTP(request => {
  const loaders = {
    champion: championLoader(REGION),
    champions: championsLoader(REGION),
    summoner: summonerLoader(REGION),
  };
  return {
    context: { loaders },
    schema: schema(REGION),
    // TODO: set graphiql to false in production
    graphiql: true,
  };
}));


const port = 3000;

app.listen(port);
console.log('RiotGraphQL is listening on port:', port);
