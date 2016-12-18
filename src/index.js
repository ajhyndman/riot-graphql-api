import express from 'express';
import graphQLHTTP from 'express-graphql';

import schema from './schema';
import championLoader from './loaders/champion';
import championsLoader from './loaders/champions';
import matchLoader from './loaders/match';
import summonerByNameLoader from './loaders/summoner';
import summonerByIDLoader from './loaders/summonerByID';


// TODO: Set the region you wish to query against
const REGION = 'oce';
const PORT = 3000;


const app = express();

app.use(graphQLHTTP(request => {
  const loaders = {
    champion: championLoader(REGION),
    champions: championsLoader(REGION),
    match: matchLoader(REGION),
    summonerName: summonerByNameLoader(REGION),
    summoner: summonerByIDLoader(REGION),
  };
  return {
    context: { loaders },
    schema: schema(REGION),
    // TODO: set graphiql to false in production
    graphiql: true,
  };
}));

app.listen(PORT, () => {
  console.log('Riot GraphQL API is listening on port:', PORT)
});
