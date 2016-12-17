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
import { RIOT_API_KEY } from '../secret';

const KEY_PARAM = `api_key=${RIOT_API_KEY}`;

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
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
    champion: {
      type: ChampionType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        region: {
          type: new GraphQLNonNull(RegionType),
        },
      },
      resolve: (root, { id, region }) =>
        fetch(`https://${region}.api.pvp.net/api/lol/static-data/${region}/v1.2/champion/${id}?champData=all&${KEY_PARAM}`)
          .then(response => response.json()),
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
