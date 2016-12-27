import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import MasteryDistributionType from './masteryDistribution';


export default new GraphQLObjectType({
  name: 'MasteryPage',
  description: 'This object contains mastery page information',
  fields: () => ({
    current: {
      type: GraphQLBoolean,
      description: 'Indicates if the mastery page is the current mastery page.',
    },
    id: {
      type: GraphQLInt,
      description: 'Mastery page ID.',
    },
    masteries: {
      type: new GraphQLList(MasteryDistributionType),
      description: 'Collection of masteries associated with the mastery page.',
    },
    name: {
      type: GraphQLString,
      description: 'Mastery page name.',
    },
  }),
});
