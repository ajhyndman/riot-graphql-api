import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { map, prop } from 'ramda';

import MatchType from './match';

export default new GraphQLObjectType({
  name: 'Summoner',
  description: 'represents a summoner',

  fields: () => ({
    id: {
      type: GraphQLInt,
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
    summonerLevel: {
      type: GraphQLInt,
    },
  }),
});
