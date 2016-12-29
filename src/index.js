import express from 'express';
import favicon from 'serve-favicon';
import graphQLHTTP from 'express-graphql';
import morgan from 'morgan';
import path from 'path';

import championLoader from './loaders/champion';
import currentGameLoader from './loaders/currentGame';
import itemLoader from './loaders/item';
import mapLoader from './loaders/map';
import masteryLoader from './loaders/mastery';
import masteryPagesLoader from './loaders/masteryPages';
import matchListLoader from './loaders/matchList';
import matchLoader from './loaders/match';
import runeLoader from './loaders/rune';
import runePagesLoader from './loaders/runePages';
import summonerByIDLoader from './loaders/summonerByID';
import summonerByNameLoader from './loaders/summoner';
import summonerSpellLoader from './loaders/summonerSpell';
import schema from './schema';
import { PORT, REGION } from '../config';


const app = express();

// TODO: Set appropriate logging level for your production server
app.use(morgan('dev'));

app.use(favicon(path.join(__dirname, 'favicon.png')));

// Initialize app with region setting.

// Static Loaders have a cache that lasts for the lifetime of the server
// instance.
const staticLoaders = {
  champion: championLoader(REGION),
  item: itemLoader(REGION),
  map: mapLoader(REGION),
  mastery: masteryLoader(REGION),
  match: matchLoader(REGION),
  rune: runeLoader(REGION),
  summonerName: summonerByNameLoader(REGION),
  summoner: summonerByIDLoader(REGION),
  summonerSpell: summonerSpellLoader(REGION),
};

app.use(graphQLHTTP(request => ({
  context: {
    // Dynamic Loaders, initialised here, have a cache that is regenereated on
    // each request.
    loaders: {
      ...staticLoaders,
      currentGame: currentGameLoader(REGION),
      matchList: matchListLoader(REGION),
      masteryPages: masteryPagesLoader(REGION),
      runePages: runePagesLoader(REGION),
    },
  },
  schema: schema(REGION),
  // TODO: set graphiql to false in production
  graphiql: true,
})));

app.listen(PORT, () => {
  console.log('Riot GraphQL API is listening on port:', PORT)
});
