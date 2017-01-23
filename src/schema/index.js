import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import { map, prop } from 'ramda';

import ChampionType from './types/champion';
import ItemType from './types/item';
import LeagueType from './types/league';
import MapType from './types/map';
import MasteryType from './types/mastery';
import MatchType from './types/match';
import RuneType from './types/rune';
import SummonerType from './types/summoner';
import SummonerSpellType from './types/summonerSpell';


const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Query against anything from the Official Riot REST API!',
  fields: () => ({
    challengerLeague: {
      type: LeagueType,
      args: {
        queueType: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (root, { queueType }, { loaders }) =>
        loaders.challengerLeague.load(queueType),
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
    map: {
      type: MapType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        },
      },
      resolve: (root, { id }, { loaders }) =>
        loaders.map.load(id),
    },
    masterLeague: {
      type: LeagueType,
      args: {
        queueType: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (root, { queueType }, { loaders }) =>
        loaders.masterLeague.load(queueType),
    },
    mastery: {
      type: MasteryType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        },
      },
      resolve: (root, { id }, { loaders }) =>
        loaders.mastery.load(id),
    },
    match: {
      type: MatchType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
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
    rune: {
      type: RuneType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (root, { id }, { loaders }) =>
        loaders.rune.load(id),
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
    summonerSpell: {
      type: SummonerSpellType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (root, { id }, { loaders }) =>
        loaders.summonerSpell.load(id),
    }
  }),
});


export default new GraphQLSchema({
  query: QueryType,
});
