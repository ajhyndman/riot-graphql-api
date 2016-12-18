import express from 'express';
import favicon from 'serve-favicon';
import graphQLHTTP from 'express-graphql';
import morgan from 'morgan';
import path from 'path';

import championLoader from './loaders/champion';
import championsLoader from './loaders/champions';
import matchListLoader from './loaders/matchList';
import matchLoader from './loaders/match';
import summonerByIDLoader from './loaders/summonerByID';
import summonerByNameLoader from './loaders/summoner';
import schema from './schema';


// TODO: Set the region you wish to query against
const REGION = 'oce';
const PORT = 3000;


const app = express();

// TODO: Set appropriate logging level for your production server
app.use(morgan('dev'));

app.use(favicon(path.join(__dirname, 'favicon.png')));

// initialize app with region setting
const loaders = {
  champion: championLoader(REGION),
  champions: championsLoader(REGION),
  match: matchLoader(REGION),
  matchList: matchListLoader(REGION),
  summonerName: summonerByNameLoader(REGION),
  summoner: summonerByIDLoader(REGION),
};

app.use(graphQLHTTP({
  context: { loaders },
  schema: schema(REGION),
  // TODO: set graphiql to false in production
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log('Riot GraphQL API is listening on port:', PORT)
});
