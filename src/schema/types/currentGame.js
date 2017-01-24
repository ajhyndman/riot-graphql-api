// @flow
import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import ChampionType from './champion';
import MapType from './map';
import ParticipantType from './participant';


const BannedChampionType = new GraphQLObjectType({
  name: 'BannedChampion',
  fields: () => ({
    champion: {
      type: ChampionType,
      description: 'The banned champion',
      resolve: (bannedChampion, args, { loaders }) =>
        loaders.champion.load(bannedChampion.championId),
    },
    pickTurn: {
      type: GraphQLInt,
      description: 'The turn during which the champion was banned',
    },
    teamId: {
      type: GraphQLInt,
      description: 'The ID of the team that banned the champion',
    },
  }),
});

export default new GraphQLObjectType({
  name: 'CurrentGame',
  description: 'This object is null if the summoner is not playing a game',
  fields: () => ({
    bannedChampions: {
      type: new GraphQLList(BannedChampionType),
      description: 'Banned champion information',
    },
    gameId: {
      type: GraphQLInt,
      description: 'The ID of the game',
    },
    gameLength: {
      type: GraphQLInt,
      description: 'The amount of time in seconds that has passed since the game started',
    },
    gameMode: {
      type: GraphQLString,
      description: 'The game mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO)',
    },
    gameQueueConfigId: {
      type: GraphQLInt,
      description: 'The queue type (queue types are documented on the Game Constants page)',
    },
    gameStartTime: {
      type: GraphQLInt,
      description: 'The game start time represented in epoch milliseconds',
    },
    gameType: {
      type: GraphQLString,
      description: 'The game type (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME)',
    },
    map: {
      type: MapType,
      description: 'The map being played on',
      resolve: (currentGame, args, { loaders }) =>
        loaders.map.load(currentGame.mapId),
    },
    // observers: {
    //   type: Observer,
    //   description: 'The observer information'
    // },
    participants: {
      type: new GraphQLList(ParticipantType),
      description: 'The participant information',
    },
    platformId: {
      type: GraphQLString,
      description: 'The ID of the platform on which the game is being played',
    },
  }),
});
