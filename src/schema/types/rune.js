import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import BasicDataStatsType from './basicDataStats';
import ImageType from './image';
import RuneMetaType from './runeMeta';


export default new GraphQLObjectType({
  name: 'Rune',
  description: 'This object contains rune data',
  fields: () => ({
    colloq: { type: GraphQLString },
    consumeOnFull: { type: GraphQLBoolean },
    consumed: { type: GraphQLBoolean },
    depth: { type: GraphQLInt },
    description: { type: GraphQLString },
    from: { type: new GraphQLList(GraphQLString) },
    group: { type: GraphQLString },
    hideFromAll: { type: GraphQLBoolean },
    id: { type: GraphQLInt },
    image: { type: ImageType },
    inStore: { type: GraphQLBoolean },
    into: { type: new GraphQLList(GraphQLString) },
    // maps: { type: Map[string, boolean] },
    name: { type: GraphQLString },
    plaintext: { type: GraphQLString },
    requiredChampion: { type: GraphQLString },
    rune: { type: RuneMetaType },
    sanitizedDescription: { type: GraphQLString },
    specialRecipe: { type: GraphQLInt },
    stacks: { type: GraphQLInt },
    stats: { type: BasicDataStatsType },
    tags: { type: new GraphQLList(GraphQLString) },
  }),
});
