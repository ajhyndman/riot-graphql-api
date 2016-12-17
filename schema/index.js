import {
  GraphQLEnumType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  graphql,
} from 'graphql';
import fetch from 'node-fetch';

import ChampionType from './types/champion';
import RegionType from './types/region';
import SummonerType from './types/summoner';

const QueryType = (region) => new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    summoner: {
      type: SummonerType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (root, { name }, { loaders }) =>
        loaders.summoner.load(name),
    },
    champion: {
      type: ChampionType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (root, { id }, { loaders }) =>
        loaders.champion.load(id),
    },
    champions: {
      type: new GraphQLList(ChampionType),
      resolve: (root, args, { loaders }) =>
        loaders.champions.load('all')
    },
  }),
});


export default (region) => new GraphQLSchema({
  query: QueryType(region),
});
