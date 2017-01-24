// @flow
import {
  GraphQLInt,
  GraphQLObjectType,
} from 'graphql';

import MasteryType from './mastery';


export default new GraphQLObjectType({
  name: 'MasteryDistribution',
  description: 'This object describes an investiture of points in a mastery',
  fields: () => ({
    mastery: {
      type: MasteryType,
      resolve: (masteryDistribution, args, { loaders }) =>
        loaders.mastery.load(
          masteryDistribution.masteryId || masteryDistribution.id
        ),
    },
    rank: { type: GraphQLInt },
  }),
});
