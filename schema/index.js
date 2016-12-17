import {
  GraphQLEnumType,
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
import { RIOT_API_KEY } from '../secret';

const KEY_PARAM = `api_key=${RIOT_API_KEY}`;

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello World',
    },
    summoner: {
      type: SummonerType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        region: {
          type: new GraphQLNonNull(RegionType),
        },
      },
      resolve: (root, { name, region }) =>
        fetch(`https://${region}.api.pvp.net/api/lol/${region}/v1.4/summoner/by-name/${name}?${KEY_PARAM}`)
          .then(response => response.json())
          .then(json => json[name.toLowerCase()]),
    },
    champions: {
      type: new GraphQLList(ChampionType),
      args: {
        region: {
          type: new GraphQLNonNull(RegionType),
        },
      },
      resolve: (root, { region }) =>
        fetch(`https://${region}.api.pvp.net/api/lol/static-data/${region}/v1.2/champion?champData=all&${KEY_PARAM}`)
          .then(response => response.json())
          .then(json => Object.values(json.data)),
    },
  }),
});


export default new GraphQLSchema({
  query: QueryType,
});
