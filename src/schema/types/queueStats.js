import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';


const AggregatedStatsType = new GraphQLObjectType({
  name: 'AggregatedStats',
  description: 'This object contains aggregated stats',
  fields: () => ({
      maxAssists: { type: GraphQLInt },
  }),
});

const QueueStatsType = new GraphQLObjectType({
  name: 'QueueStats',
  description: 'This object contains stats for a player in a specific game mode',
  fields: () => ({
      aggregatedStats: { type: AggregatedStatsType },
      wins: { type: GraphQLInt },
      losses: { type: GraphQLInt },
      // Mode is a string like AramUnranked5x5, Ascension, URF, RankedFlexSR
      mode: { type: GraphQLString },
  }),
});

export default QueueStatsType;
