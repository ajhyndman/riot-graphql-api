// @flow
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


const GoldType = new GraphQLObjectType({
  name: 'Gold',
  description: 'This object contains item gold data',
  fields: () => ({
    base: { type: GraphQLInt },
    purchasable: { type: GraphQLBoolean },
    sell: { type: GraphQLInt },
    total: { type: GraphQLInt },
  }),
});

export default new GraphQLObjectType({
  name: 'Item',
  description: 'This object contains item data.',
  fields: () => ({
    colloq: { type: GraphQLString },
    consumeOnFull: { type: GraphQLBoolean },
    consumed: { type: GraphQLBoolean },
    depth: { type: GraphQLInt },
    description: { type: GraphQLString },
    // effect: { type: Map[string, string], },
    from: { type: new GraphQLList(GraphQLString) },
    gold: { type: GoldType, description: 'Data Dragon includes the gold field for basic data, which is shared by both rune and item. However, only items have a gold field on them, representing their gold cost in the store. Since runes are not sold in the store, they have no gold cost.' },
    group: { type: GraphQLString },
    hideFromAll: { type: GraphQLBoolean },
    id: { type: GraphQLInt },
    image: { type: ImageType },
    inStore: { type: GraphQLBoolean },
    into: { type: new GraphQLList(GraphQLString) },
    // maps: { type: Map[string, boolean], },
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
