import {
  GraphQLEnumType,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import ImageType from './image';


const TreeType = new GraphQLEnumType({
  name: 'MasteryTree',
  description: 'There are three mastery trees which a mastery may belong to',
  values: {
    Cunning: {},
    Ferocity: {},
    Resolve: {},
  },
});

export default new GraphQLObjectType({
  name: 'Mastery',
  description: 'This object contains mastery data',
  fields: () => ({
    description: { type: new GraphQLList(GraphQLString) },
    id: { type: GraphQLInt },
    image: { type: ImageType },
    masteryTree: { type: TreeType },
    name: { type: GraphQLString },
    prereq: { type: GraphQLInt },
    ranks: { type: GraphQLInt },
    sanitizedDescription: { type: new GraphQLList(GraphQLString) },
  }),
});
