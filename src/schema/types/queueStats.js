import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import DateType from './date';


// TODO: default each of these to 0. (currently they are not included in the riot response if the value is 0)
const AggregatedStatsType = new GraphQLObjectType({
  name: 'AggregatedStats',
  description: 'This object contains aggregated stats',
  fields: () => ({
      // dominion-only stats are ignored
      botGamesPlayed: { type: GraphQLInt },
      killingSpree: { type: GraphQLInt },
      maxChampionsKilled: { type: GraphQLInt },
      maxLargestCriticalStrike: { type: GraphQLInt },
      maxLargestKillingSpree: { type: GraphQLInt },
      maxNumDeaths: { type: GraphQLInt },  // only returned for ranked statistics
      maxTimePlayed: { type: GraphQLInt },
      maxTimeSpentLiving: { type: GraphQLInt },
      mostChampionKillsPerSession: { type: GraphQLInt },
      mostSpellsCast: { type: GraphQLInt },
      normalGamesPlayed: { type: GraphQLInt },
      rankedPremadeGamesPlayed: { type: GraphQLInt },
      rankedSoloGamesPlayed: { type: GraphQLInt },
      totalAssists: { type: GraphQLInt },
      totalChampionKills: { type: GraphQLInt },
      totalDamageDealt: { type: GraphQLInt },
      totalDamageTaken: { type: GraphQLInt },
      totalDeathsPerSession: { type: GraphQLInt },  // only returned for ranked statistics
      totalDoubleKills: { type: GraphQLInt },
      totalFirstBlood: { type: GraphQLInt },
      totalGoldEarned: { type: GraphQLInt },
      totalHeal: { type: GraphQLInt },
      totalMagicDamageDealt: { type: GraphQLInt },
      totalMinionKills: { type: GraphQLInt },
      totalNeutralMinionsKilled: { type: GraphQLInt },
      totalPentaKills: { type: GraphQLInt },
      totalPhysicalDamageDealt: { type: GraphQLInt },
      totalQuadraKills: { type: GraphQLInt },
      totalSessionsLost: { type: GraphQLInt },
      totalSessionsPlayed: { type: GraphQLInt },
      totalSessionsWon: { type: GraphQLInt },
      totalTripleKills: { type: GraphQLInt },
      totalTurretsKilled: { type: GraphQLInt },
      totalUnrealKills: { type: GraphQLInt },  // ??? maybe this is a hexakill
  }),
});

const QueueStatsType = new GraphQLObjectType({
  name: 'QueueStats',
  description: 'This object contains stats for a player in a specific game mode',
  fields: () => ({
      aggregatedStats: { type: AggregatedStatsType },
      wins: { type: GraphQLInt },
      losses: { type: GraphQLInt },  // Returned for ranked queue types only.
      modifyDate: { type: DateType, },  // this is a long (epoch milliseconds)
      // Mode is a string like AramUnranked5x5, Ascension, URF, RankedFlexSR
      mode: { type: GraphQLString },
  }),
});

export default QueueStatsType;
