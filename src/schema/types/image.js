// @flow
import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';


// TODO: This should probably not be hardcoded to a specific version.
const HOST = 'http://ddragon.leagueoflegends.com/cdn/7.1.1/img/';

export default new GraphQLObjectType({
  name: 'Image',
  description: 'This object contains image data',
  fields: () => ({
    full: {
      type: GraphQLString,
      resolve: (imageData) =>
        `${HOST}champion/${imageData.full}`,
    },
    group: { type: GraphQLString },
    h: { type: GraphQLInt },
    sprite: {
      type: GraphQLString,
      resolve: (imageData) =>
        `${HOST}sprite/${imageData.sprite}`,
    },
    w: { type: GraphQLInt },
    x: { type: GraphQLInt },
    y: { type: GraphQLInt },
  }),
});
