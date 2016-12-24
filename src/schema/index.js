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
import { map, prop } from 'ramda';

import ChampionType from './types/champion';
import ItemType from './types/item';
import MatchType from './types/match';
import SummonerType from './types/summoner';

const QueryType = (region) => new GraphQLObjectType({
  name: 'Query',
  description: 'Query against anything from the Official Riot REST API!',
  fields: () => ({
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
    item: {
      type: ItemType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        },
      },
      resolve: (root, { id }, { loaders }) =>
        loaders.item.load(id),
    },
    match: {
      type: MatchType,
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: (root, { id }, { loaders }) =>
        loaders.match.load(id),
    },
    matchList: {
      type: new GraphQLList(MatchType),
      args: {
        summonerId: { type: new GraphQLNonNull(GraphQLInt) },
        start: { type: new GraphQLNonNull(GraphQLInt) },
        end: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (root, { summonerId, start, end }, { loaders }) =>
        loaders.matchList.load(summonerId)
        .then((matchList) =>
          loaders.match.loadMany(
            map(prop('matchId'), matchList.slice(start, end))
          )
        ),
    },
    summoner: {
      type: SummonerType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (root, { name }, { loaders }) =>
        loaders.summonerName.load(name),
    },
  }),
});


export default (region) => new GraphQLSchema({
  query: QueryType(region),
});
