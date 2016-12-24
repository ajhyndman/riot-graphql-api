import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';


export default new GraphQLObjectType({
  name: 'Image',
  description: 'This object contains image data',
  fields: () => ({
    full: { type: GraphQLString },
    group: { type: GraphQLString },
    h: { type: GraphQLInt },
    sprite: { type: GraphQLString },
    w: { type: GraphQLInt },
    x: { type: GraphQLInt },
    y: { type: GraphQLInt },
  }),
});
