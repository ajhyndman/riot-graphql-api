// @flow
import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import ImageType from './image';
import ItemType from './item';
import LevelTipType from './levelTip';
import SpellVarsType from './spellVars';


// -- Inner Types --

const BlockItemType = new GraphQLObjectType({
  name: 'BlockItem',
  description: 'This object contains champion recommended block item data',
  fields: () => ({
    count: { type: GraphQLInt },
    item: {
      type: ItemType,
      resolve: (blockItem, args, { loaders }) =>
        loaders.item.load(blockItem.id),
    },
  }),
});

const BlockType = new GraphQLObjectType({
  name: 'Block',
  description: 'This object contains champion recommended block data',
  fields: () => ({
    items: { type: new GraphQLList(BlockItemType) },
    recMath: { type: GraphQLBoolean },
    type: { type: GraphQLString },
  }),
});

// -- Field Types --

const InfoType = new GraphQLObjectType({
  name: 'Info',
  description: 'This object contains champion information',
  fields: () => ({
    attack: { type: GraphQLInt },
    defense: { type: GraphQLInt },
    difficulty: { type: GraphQLInt },
    magic: { type: GraphQLInt },
  }),
});

const PassiveType = new GraphQLObjectType({
  name: 'Passive',
  description: 'This object contains champion passive data',
  fields: () => ({
    description: { type: GraphQLString },
    image: { type: ImageType },
    name: { type: GraphQLString },
    sanitizedDescription: { type: GraphQLString },
  }),
});

const RecommendedType = new GraphQLObjectType({
  name: 'Recommended',
  description: 'This object contains champion recommended data',
  fields: () => ({
    blocks: { type: new GraphQLList(BlockType) },
    champion: { type: GraphQLString },
    map: { type: GraphQLString },
    mode: { type: GraphQLString },
    priority: { type: GraphQLBoolean },
    title: { type: GraphQLString },
    type: { type: GraphQLString },
  }),
})

const SkinType = new GraphQLObjectType({
  name: 'Skin',
  description: 'This object contains champion skin data',
  fields: () => ({
    // TODO: Resolve skin data
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    num: { type: GraphQLInt },
  }),
})

const SpellType = new GraphQLObjectType({
  name: 'Spell',
  description: 'This object contains champion spell data',
  fields: () => ({
    altImages: { type: new GraphQLList(ImageType) },
    cooldown: { type: new GraphQLList(GraphQLFloat) },
    cooldownBurn: { type: GraphQLString },
    cost: { type: new GraphQLList(GraphQLInt) },
    costBurn: { type: GraphQLString },
    costType: { type: GraphQLString },
    description: { type: GraphQLString },
    effect: {
      type: new GraphQLList(new GraphQLList(GraphQLFloat)),
      description: 'This field is a List of List of Double',
    },
    effectBurn: { type: new GraphQLList(GraphQLString) },
    image: { type: ImageType },
    key: { type: GraphQLString },
    leveltip: { type: LevelTipType },
    maxRank: { type: GraphQLInt },
    name: { type: GraphQLString },
    range: {
      type: new GraphQLList(GraphQLInt),
      description: 'This field is always a List of Int',
    },
    rangeBurn: { type: GraphQLString },
    resource: { type: GraphQLString },
    sanitizedDescription: { type: GraphQLString },
    sanitizedTooltip: { type: GraphQLString },
    tooltip: { type: GraphQLString },
    vars: { type: new GraphQLList(SpellVarsType) },
  }),
})

const StatsType = new GraphQLObjectType({
  name: 'Stats',
  description: 'This object contains champion stats data',
  fields: () => ({
    armor: { type: GraphQLFloat },
    armorperlevel: { type: GraphQLFloat },
    attackdamage: { type: GraphQLFloat },
    attackdamageperlevel: { type: GraphQLFloat },
    attackrange: { type: GraphQLFloat },
    attackspeedoffset: { type: GraphQLFloat },
    attackspeedperlevel: { type: GraphQLFloat },
    crit: { type: GraphQLFloat },
    critperlevel: { type: GraphQLFloat },
    hp: { type: GraphQLFloat },
    hpperlevel: { type: GraphQLFloat },
    hpregen: { type: GraphQLFloat },
    hpregenperlevel: { type: GraphQLFloat },
    movespeed: { type: GraphQLFloat },
    mp: { type: GraphQLFloat },
    mpperlevel: { type: GraphQLFloat },
    mpregen: { type: GraphQLFloat },
    mpregenperlevel: { type: GraphQLFloat },
    spellblock: { type: GraphQLFloat },
    spellblockperlevel: { type: GraphQLFloat },
  }),
});


export default new GraphQLObjectType({
  name: 'Champion',
  description: 'This object contains champion data',
  fields: () => ({
    allytips: { type: new GraphQLList(GraphQLString) },
    blurb: { type: GraphQLString },
    enemytips: { type: new GraphQLList(GraphQLString) },
    id: { type: GraphQLInt },
    image: { type: ImageType },
    info: { type: InfoType },
    key: { type: GraphQLString },
    lore: { type: GraphQLString },
    name: { type: GraphQLString },
    partype: { type: GraphQLString },
    passive: { type: PassiveType },
    recommended: { type: new GraphQLList(RecommendedType) },
    skins: { type: new GraphQLList(SkinType) },
    spells: { type: new GraphQLList(SpellType) },
    stats: { type: StatsType },
    tags: { type: new GraphQLList(GraphQLString) },
    title: { type: GraphQLString },
  }),
});
