import {
  GraphQLInt,
  GraphQLObjectType,
} from 'graphql';

import RuneType from './rune';


export default new GraphQLObjectType({
  name: 'RuneDistribution',
  description: 'This object describes an active rune in a rune page',
  fields: () => ({
    rune: {
      type: RuneType,
      resolve: (runeDistribution, args, { loaders }) =>
        loaders.rune.load(runeDistribution.runeId),
    },
    rank: { type: GraphQLInt },
  }),
});
