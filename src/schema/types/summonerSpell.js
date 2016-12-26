import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLFloat,
} from 'graphql';

import ImageType from './image';
import LevelTipType from './levelTip';
import SpellVarsType from './spellVars';


export default new GraphQLObjectType({
  name: 'SummonerSpell',
  description: 'This object contains summoner spell data',
  fields: () => ({
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
    id: { type: GraphQLInt },
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
});
