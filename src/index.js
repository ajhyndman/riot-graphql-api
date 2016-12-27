import express from 'express';
import favicon from 'serve-favicon';
import graphQLHTTP from 'express-graphql';
import morgan from 'morgan';
import path from 'path';

import championLoader from './loaders/champion';
import itemLoader from './loaders/item';
import mapLoader from './loaders/map';
import masteryLoader from './loaders/mastery';
import masteryPagesLoader from './loaders/masteryPages';
import matchListLoader from './loaders/matchList';
import matchLoader from './loaders/match';
import runeLoader from './loaders/rune';
import summonerByIDLoader from './loaders/summonerByID';
import summonerByNameLoader from './loaders/summoner';
import summonerSpellLoader from './loaders/summonerSpell';
import schema from './schema';
import { PORT, REGION } from '../config';


const app = express();

// TODO: Set appropriate logging level for your production server
app.use(morgan('dev'));

app.use(favicon(path.join(__dirname, 'favicon.png')));

// initialize app with region setting
const loaders = {
  champion: championLoader(REGION),
  item: itemLoader(REGION),
  map: mapLoader(REGION),
  mastery: masteryLoader(REGION),
  masteryPages: masteryPagesLoader(REGION),
  match: matchLoader(REGION),
  matchList: matchListLoader(REGION),
  rune: runeLoader(REGION),
  summonerName: summonerByNameLoader(REGION),
  summoner: summonerByIDLoader(REGION),
  summonerSpell: summonerSpellLoader(REGION),
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
