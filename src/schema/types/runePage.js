// @flow
import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import RuneType from './rune';


const RuneSlotType = new GraphQLObjectType({
  name: 'RuneSlot',
  description: 'This object contains rune slot information',
  fields: () => ({
    rune: {
      type: RuneType,
      description: 'Rune associated with the rune slot.',
      resolve: (runeSlot, args, { loaders }) =>
        loaders.rune.load(runeSlot.runeId),
    },
    runeSlotId: {
      type: GraphQLInt,
      description: 'Rune slot ID.',
    },
  }),
});

export default new GraphQLObjectType({
  name: 'RunePage',
  description: 'This object contains rune page information',
  fields: () => ({
    current: {
      type: GraphQLBoolean,
      description: 'Indicates if the page is the current page.',
    },
    id: {
      type: GraphQLInt,
      description: 'Rune page ID.',
    },
    name: {
      type: GraphQLString,
      description: 'Rune page name.',
    },
    slots: {
      type: new GraphQLList(RuneSlotType),
      description: 'Collection of rune slots associated with the rune page.',
    },
  }),
});