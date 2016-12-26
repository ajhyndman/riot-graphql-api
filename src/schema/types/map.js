import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import ImageType from './image';


export default new GraphQLObjectType({
  name: 'Map',
  description: 'This object contains map details data',
  fields: () => ({
    image: { type: ImageType },
    mapId: { type: GraphQLInt },
    mapName: { type: GraphQLString },
  }),
});
