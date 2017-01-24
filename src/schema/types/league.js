// @flow
import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import SummonerType from './summoner';


const MiniSeriesType = new GraphQLObjectType({
  name: 'MiniSeries',
  description: 'This object contains mini series information.',
  fields: () => ({
    losses: {
      type: GraphQLInt,
      description: 'Number of current losses in the mini series.',
    },
    progress: {
      type: GraphQLString,
      description: "String showing the current, sequential mini series progress where 'W' represents a win, 'L' represents a loss,and 'N' represents a game that hasn't been played yet.",
    },
    target: {
      type: GraphQLInt,
      description: 'Number of wins required for promotion.',
    },
    wins: {
      type: GraphQLInt,
      description: 'Number of current wins in the mini series.',
    },
  }),
});

const LeagueEntryType = new GraphQLObjectType({
  name: 'LeagueEntry',
  description: 'This object contains league participant information representing a summoner or team.',
  fields: () => ({
    division: {
      type: GraphQLString,
      description: 'The league division of the participant.',
    },
    isFreshBlood: {
      type: GraphQLBoolean,
      description: 'Specifies if the participant is fresh blood.',
    },
    isHotStreak: {
      type: GraphQLBoolean,
      description: 'Specifies if the participant is on a hot streak.',
    },
    isInactive: {
      type: GraphQLBoolean,
      description: 'Specifies if the participant is inactive.',
    },
    isVeteran: {
      type: GraphQLBoolean,
      description: 'Specifies if the participant is a veteran.',
    },
    leaguePoints: {
      type: GraphQLInt,
      description: 'The league points of the participant.',
    },
    losses: {
      type: GraphQLInt,
      description: 'The number of losses for the participant.',
    },
    miniSeries: {
      type: MiniSeriesType,
      description: 'Mini series data for the participant. Only present if the participant is currently in a mini series.',
    },
    player: {
      type: SummonerType,
      description: 'The participant (if a player), represented by this entry.',
      resolve: (leagueEntry, args, { loaders }) =>
        loaders.summoner.load(leagueEntry.playerOrTeamId),
    },
    playstyle: {
      type: GraphQLString,
      description: 'The playstyle of the participant. (Legal values: NONE, SOLO, SQUAD, TEAM)',
    },
    wins: {
      type: GraphQLInt,
      description: 'The number of wins for the participant.',
    },
  }),
});

export default new GraphQLObjectType({
  name: 'League',
  description: 'This object contains league information',
  fields: () => ({
    entries: {
      type: new GraphQLList(LeagueEntryType),
      description: 'The requested league entries.',
    },
    name: {
      type: GraphQLString,
      description: 'This name is an internal place-holder name only. Display and localization of names in the game client are handled client-side.',
    },
    queue: {
      type: GraphQLString,
      description: 'The league\'s queue type. (Legal values: RANKED_FLEX_SR, RANKED_FLEX_TT, RANKED_SOLO_5x5, RANKED_TEAM_3x3, RANKED_TEAM_5x5)',
    },
    tier: {
      type: GraphQLString,
      description: 'The league\'s tier. (Legal values: CHALLENGER, MASTER, DIAMOND, PLATINUM, GOLD, SILVER, BRONZE)',
    },
  }),
});
