import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { map, prop } from 'ramda';

import MasteryPageType from './masteryPage';
import MatchType from './match';
import RunePageType from './runePage';

export default new GraphQLObjectType({
  name: 'Summoner',
  description: 'represents a summoner',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    masteryPages: {
      type: new GraphQLList(MasteryPageType),
      resolve: (summoner, args, { loaders }) =>
        loaders.masteryPages.load(summoner.id),
    },
    matchList: {
      type: new GraphQLList(MatchType),
      args: {
        start: { type: new GraphQLNonNull(GraphQLInt) },
        end: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (summoner, { start, end }, { loaders }) =>
        loaders.matchList.load(summoner.id)
        .then((matchList) =>
          loaders.match.loadMany(
            map(prop('matchId'), matchList.slice(start, end))
          )
        ),
    },
    name: {
      type: GraphQLString,
    },
    profileIconId: {
      type: GraphQLInt,
    },
    revisionDate: {
      type: GraphQLInt,
    },
    runePages: {
      type: new GraphQLList(RunePageType),
      resolve: (summoner, args, { loaders }) =>
        loaders.runePages.load(summoner.id),
    },
    summonerLevel: {
      type: GraphQLInt,
    },
  }),
});
