// @flow
import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import ChampionType from './champion';
import ItemType from './item';
import MasteryDistributionType from './masteryDistribution';
import RuneDistributionType from './runeDistribution';
import SummonerType from './summoner';
import SummonerSpellType from './summonerSpell';


const ParticipantStatsType = new GraphQLObjectType({
  name: 'ParticipantStats',
  description: 'This object contains participant statistics information',
  fields: () => ({
    assists: {
      type: GraphQLInt,
      description: 'Number of assists',
    },
    champLevel: {
      type: GraphQLInt,
      description: 'Champion level achieved',
    },
    combatPlayerScore: {
      type: GraphQLInt,
      description: 'If game was a dominion game, player\'s combat score, otherwise 0',
    },
    deaths: {
      type: GraphQLInt,
      description: 'Number of deaths',
    },
    doubleKills: {
      type: GraphQLInt,
      description: 'Number of double kills',
    },
    firstBloodAssist: {
      type: GraphQLBoolean,
      description: 'Flag indicating if participant got an assist on first blood',
    },
    firstBloodKill: {
      type: GraphQLBoolean,
      description: 'Flag indicating if participant got first blood',
    },
    firstInhibitorAssist: {
      type: GraphQLBoolean,
      description: 'Flag indicating if participant got an assist on the first inhibitor',
    },
    firstInhibitorKill: {
      type: GraphQLBoolean,
      description: 'Flag indicating if participant destroyed the first inhibitor',
    },
    firstTowerAssist: {
      type: GraphQLBoolean,
      description: 'Flag indicating if participant got an assist on the first tower',
    },
    firstTowerKill: {
      type: GraphQLBoolean,
      description: 'Flag indicating if participant destroyed the first tower',
    },
    goldEarned: {
      type: GraphQLInt,
      description: 'Gold earned',
    },
    goldSpent: {
      type: GraphQLInt,
      description: 'Gold spent',
    },
    inhibitorKills: {
      type: GraphQLInt,
      description: 'Number of inhibitor kills',
    },
    item0: {
      type: ItemType,
      description: 'First item',
      resolve: (match, args, { loaders }) =>
        loaders.item.load(match.item0),
    },
    item1: {
      type: ItemType,
      description: 'Second item',
      resolve: (match, args, { loaders }) =>
        loaders.item.load(match.item1),
    },
    item2: {
      type: ItemType,
      description: 'Third item',
      resolve: (match, args, { loaders }) =>
        loaders.item.load(match.item2),
    },
    item3: {
      type: ItemType,
      description: 'Fourth item',
      resolve: (match, args, { loaders }) =>
        loaders.item.load(match.item3),
    },
    item4: {
      type: ItemType,
      description: 'Fifth item',
      resolve: (match, args, { loaders }) =>
        loaders.item.load(match.item4),
    },
    item5: {
      type: ItemType,
      description: 'Sixth item',
      resolve: (match, args, { loaders }) =>
        loaders.item.load(match.item5),
    },
    item6: {
      type: ItemType,
      description: 'Seventh item',
      resolve: (match, args, { loaders }) =>
        loaders.item.load(match.item6),
    },
    killingSprees: {
      type: GraphQLInt,
      description: 'Number of killing sprees',
    },
    kills: {
      type: GraphQLInt,
      description: 'Number of kills',
    },
    largestCriticalStrike: {
      type: GraphQLInt,
      description: 'Largest critical strike',
    },
    largestKillingSpree: {
      type: GraphQLInt,
      description: 'Largest killing spree',
    },
    largestMultiKill: {
      type: GraphQLInt,
      description: 'Largest multi kill',
    },
    magicDamageDealt: {
      type: GraphQLInt,
      description: 'Magical damage dealt',
    },
    magicDamageDealtToChampions: {
      type: GraphQLInt,
      description: 'Magical damage dealt to champions',
    },
    magicDamageTaken: {
      type: GraphQLInt,
      description: 'Magic damage taken',
    },
    minionsKilled: {
      type: GraphQLInt,
      description: 'Minions killed',
    },
    neutralMinionsKilled: {
      type: GraphQLInt,
      description: 'Neutral minions killed',
    },
    neutralMinionsKilledEnemyJungle: {
      type: GraphQLInt,
      description: 'Neutral jungle minions killed in the enemy team\'s jungle',
    },
    neutralMinionsKilledTeamJungle: {
      type: GraphQLInt,
      description: 'Neutral jungle minions killed in your team\'s jungle',
    },
    nodeCapture: {
      type: GraphQLInt,
      description: 'If game was a dominion game, number of node captures',
    },
    nodeCaptureAssist: {
      type: GraphQLInt,
      description: 'If game was a dominion game, number of node capture assists',
    },
    nodeNeutralize: {
      type: GraphQLInt,
      description: 'If game was a dominion game, number of node neutralizations',
    },
    nodeNeutralizeAssist: {
      type: GraphQLInt,
      description: 'If game was a dominion game, number of node neutralization assists',
    },
    objectivePlayerScore: {
      type: GraphQLInt,
      description: 'If game was a dominion game, player\'s objectives score, otherwise 0',
    },
    pentaKills: {
      type: GraphQLInt,
      description: 'Number of penta kills',
    },
    physicalDamageDealt: {
      type: GraphQLInt,
      description: 'Physical damage dealt',
    },
    physicalDamageDealtToChampions: {
      type: GraphQLInt,
      description: 'Physical damage dealt to champions',
    },
    physicalDamageTaken: {
      type: GraphQLInt,
      description: 'Physical damage taken',
    },
    quadraKills: {
      type: GraphQLInt,
      description: 'Number of quadra kills',
    },
    sightWardsBoughtInGame: {
      type: GraphQLInt,
      description: 'Sight wards purchased',
    },
    teamObjective: {
      type: GraphQLInt,
      description: 'If game was a dominion game, number of completed team objectives (i.e., quests)',
    },
    totalDamageDealt: {
      type: GraphQLInt,
      description: 'Total damage dealt',
    },
    totalDamageDealtToChampions: {
      type: GraphQLInt,
      description: 'Total damage dealt to champions',
    },
    totalDamageTaken: {
      type: GraphQLInt,
      description: 'Total damage taken',
    },
    totalHeal: {
      type: GraphQLInt,
      description: 'Total heal amount',
    },
    totalPlayerScore: {
      type: GraphQLInt,
      description: 'If game was a dominion game, player\'s total score, otherwise 0',
    },
    totalScoreRank: {
      type: GraphQLInt,
      description: 'If game was a dominion game, team rank of the player\'s total score (e.g., 1-5)',
    },
    totalTimeCrowdControlDealt: {
      type: GraphQLInt,
      description: 'Total dealt crowd control time',
    },
    totalUnitsHealed: {
      type: GraphQLInt,
      description: 'Total units healed',
    },
    towerKills: {
      type: GraphQLInt,
      description: 'Number of tower kills',
    },
    tripleKills: {
      type: GraphQLInt,
      description: 'Number of triple kills',
    },
    trueDamageDealt: {
      type: GraphQLInt,
      description: 'True damage dealt',
    },
    trueDamageDealtToChampions: {
      type: GraphQLInt,
      description: 'True damage dealt to champions',
    },
    trueDamageTaken: {
      type: GraphQLInt,
      description: 'True damage taken',
    },
    unrealKills: {
      type: GraphQLInt,
      description: 'Number of unreal kills',
    },
    visionWardsBoughtInGame: {
      type: GraphQLInt,
      description: 'Vision wards purchased',
    },
    wardsKilled: {
      type: GraphQLInt,
      description: 'Number of wards killed',
    },
    wardsPlaced: {
      type: GraphQLInt,
      description: 'Number of wards placed',
    },
    winner: {
      type: GraphQLBoolean,
      description: 'Flag indicating whether or not the participant won',
    },
  }),
});

// TODO: Link up related data
export default new GraphQLObjectType({
  name: 'Participant',
  description: 'This object contains match participant information',
  fields: () => ({
    champion: {
      type: ChampionType,
      resolve: (participant, args, { loaders }) =>
        loaders.champion.load(participant.championId),
    },
    highestAchievedSeasonTier: { type: GraphQLString },
    masteries: {
      type: new GraphQLList(MasteryDistributionType),
      description: 'List of mastery information',
    },
    summoner: {
      type: SummonerType,
      resolve: (participant, args, { loaders }) =>
        loaders.summoner.load(participant.summonerId),
    },
    runes: {
      type: new GraphQLList(RuneDistributionType),
      description: 'List of rune information',
    },
    spell1: {
      type: SummonerSpellType,
      description: 'First summoner spell',
      resolve: (participant, args, { loaders }) =>
        loaders.summonerSpell.load(participant.spell1Id),
    },
    spell2: {
      type: SummonerSpellType,
      description: 'Second summoner spell',
      resolve: (participant, args, { loaders }) =>
        loaders.summonerSpell.load(participant.spell2Id),
    },
    stats: { type: ParticipantStatsType },
    // teamId	int	Team ID
    // timeline	ParticipantTimeline	Timeline data. Delta fields refer to values for the specified period (e.g., the gold per minute over the first 10 minutes of the game versus the second 20 minutes of the game. Diffs fields refer to the deltas versus the calculated lane opponent(s).
  }),
});
