import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
} from 'graphql';

import ChampionType from './champion';
import DateType from './date';


const AggregatedStatsType = new GraphQLObjectType({
  name: 'AggregatedStats_Ranked',
  description: 'This object contains aggregated stats',
  fields: () => ({
    averageAssists: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    averageChampionsKilled: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    averageCombatPlayerScore: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    averageNodeCapture: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    averageNodeCaptureAssist: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    averageNodeNeutralize: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    averageNodeNeutralizeAssist: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    averageNumDeaths: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    averageObjectivePlayerScore: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    averageTeamObjective: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    averageTotalPlayerScore: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    botGamesPlayed: { type: GraphQLInt },
    killingSpree: { type: GraphQLInt },
    maxAssists: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    maxChampionsKilled: { type: GraphQLInt },
    maxCombatPlayerScore: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    maxLargestCriticalStrike: { type: GraphQLInt },
    maxLargestKillingSpree: { type: GraphQLInt },
    maxNodeCapture: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    maxNodeCaptureAssist: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    maxNodeNeutralize: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    maxNodeNeutralizeAssist: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    maxNumDeaths: {
      type: GraphQLInt,
      description: 'Only returned for ranked statistics.',
    },
    maxObjectivePlayerScore: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    maxTeamObjective: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    maxTimePlayed: { type: GraphQLInt },
    maxTimeSpentLiving: { type: GraphQLInt },
    maxTotalPlayerScore: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    mostChampionKillsPerSession: { type: GraphQLInt },
    mostSpellsCast: { type: GraphQLInt },
    normalGamesPlayed: { type: GraphQLInt },
    rankedPremadeGamesPlayed: { type: GraphQLInt },
    rankedSoloGamesPlayed: { type: GraphQLInt },
    totalAssists: { type: GraphQLInt },
    totalChampionKills: { type: GraphQLInt },
    totalDamageDealt: { type: GraphQLInt },
    totalDamageTaken: { type: GraphQLInt },
    totalDeathsPerSession: {
      type: GraphQLInt,
      description: 'Only returned for ranked statistics.',
    },
    totalDoubleKills: { type: GraphQLInt },
    totalFirstBlood: { type: GraphQLInt },
    totalGoldEarned: { type: GraphQLInt },
    totalHeal: { type: GraphQLInt },
    totalMagicDamageDealt: { type: GraphQLInt },
    totalMinionKills: { type: GraphQLInt },
    totalNeutralMinionsKilled: { type: GraphQLInt },
    totalNodeCapture: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    totalNodeNeutralize: {
      type: GraphQLInt,
      description: 'Dominion only.',
    },
    totalPentaKills: { type: GraphQLInt },
    totalPhysicalDamageDealt: { type: GraphQLInt },
    totalQuadraKills: { type: GraphQLInt },
    totalSessionsLost: { type: GraphQLInt },
    totalSessionsPlayed: { type: GraphQLInt },
    totalSessionsWon: { type: GraphQLInt },
    totalTripleKills: { type: GraphQLInt },
    totalTurretsKilled: { type: GraphQLInt },
    totalUnrealKills: { type: GraphQLInt },
  }),
});

const ChampionStatsType = new GraphQLObjectType({
  name: 'ChampionStats',
  description: 'This object contains a collection of champion stats information',
  fields: () => ({
    champion: {
      type: ChampionType,
      resolve: (championStats, args, { loaders }) =>
        loaders.champion.load(championStats.id),
    },
    stats: { type: AggregatedStatsType },
  }),
});

export default new GraphQLObjectType({
  name: 'RankedStats',
  description: 'This object contains ranked stats information',
  fields: () => ({
    modifyDate: { type: DateType },
    champions: { type: new GraphQLList(ChampionStatsType) },
  }),
});
