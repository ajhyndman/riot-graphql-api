import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLString,
} from 'graphql';
import { prop, sortBy, zipWith } from 'ramda';

import ChampionType from './champion';
import DateType from './date';
import SummonerType from './summoner';


const ParticipantStatsType = new GraphQLObjectType({
  name: 'ParticipantStats',
  description: 'This object contains participant statistics information',
  fields: () => ({
    assists: {
      type: GraphQLInt,
      description: 'Number of assists'
    },
    champLevel: {
      type: GraphQLInt,
      description: 'Champion level achieved'
    },
    combatPlayerScore: {
      type: GraphQLInt,
      description: 'If game was a dominion game, player\'s combat score, otherwise 0'
    },
    deaths: {
      type: GraphQLInt,
      description: 'Number of deaths'
    },
    doubleKills: {
      type: GraphQLInt,
      description: 'Number of double kills'
    },
    firstBloodAssist: {
      type: GraphQLBoolean,
      description: 'Flag indicating if participant got an assist on first blood'
    },
    firstBloodKill: {
      type: GraphQLBoolean,
      description: 'Flag indicating if participant got first blood'
    },
    firstInhibitorAssist: {
      type: GraphQLBoolean,
      description: 'Flag indicating if participant got an assist on the first inhibitor'
    },
    firstInhibitorKill: {
      type: GraphQLBoolean,
      description: 'Flag indicating if participant destroyed the first inhibitor'
    },
    firstTowerAssist: {
      type: GraphQLBoolean,
      description: 'Flag indicating if participant got an assist on the first tower'
    },
    firstTowerKill: {
      type: GraphQLBoolean,
      description: 'Flag indicating if participant destroyed the first tower'
    },
    goldEarned: {
      type: GraphQLInt,
      description: 'Gold earned'
    },
    goldSpent: {
      type: GraphQLInt,
      description: 'Gold spent'
    },
    inhibitorKills: {
      type: GraphQLInt,
      description: 'Number of inhibitor kills'
    },
    item0: {
      type: GraphQLInt,
      description: 'First item ID'
    },
    item1: {
      type: GraphQLInt,
      description: 'Second item ID'
    },
    item2: {
      type: GraphQLInt,
      description: 'Third item ID'
    },
    item3: {
      type: GraphQLInt,
      description: 'Fourth item ID'
    },
    item4: {
      type: GraphQLInt,
      description: 'Fifth item ID'
    },
    item5: {
      type: GraphQLInt,
      description: 'Sixth item ID'
    },
    item6: {
      type: GraphQLInt,
      description: 'Seventh item ID'
    },
    killingSprees: {
      type: GraphQLInt,
      description: 'Number of killing sprees'
    },
    kills: {
      type: GraphQLInt,
      description: 'Number of kills'
    },
    largestCriticalStrike: {
      type: GraphQLInt,
      description: 'Largest critical strike'
    },
    largestKillingSpree: {
      type: GraphQLInt,
      description: 'Largest killing spree'
    },
    largestMultiKill: {
      type: GraphQLInt,
      description: 'Largest multi kill'
    },
    magicDamageDealt: {
      type: GraphQLInt,
      description: 'Magical damage dealt'
    },
    magicDamageDealtToChampions: {
      type: GraphQLInt,
      description: 'Magical damage dealt to champions'
    },
    magicDamageTaken: {
      type: GraphQLInt,
      description: 'Magic damage taken'
    },
    minionsKilled: {
      type: GraphQLInt,
      description: 'Minions killed'
    },
    neutralMinionsKilled: {
      type: GraphQLInt,
      description: 'Neutral minions killed'
    },
    neutralMinionsKilledEnemyJungle: {
      type: GraphQLInt,
      description: 'Neutral jungle minions killed in the enemy team\'s jungle'
    },
    neutralMinionsKilledTeamJungle: {
      type: GraphQLInt,
      description: 'Neutral jungle minions killed in your team\'s jungle'
    },
    nodeCapture: {
      type: GraphQLInt,
      description: 'If game was a dominion game, number of node captures'
    },
    nodeCaptureAssist: {
      type: GraphQLInt,
      description: 'If game was a dominion game, number of node capture assists'
    },
    nodeNeutralize: {
      type: GraphQLInt,
      description: 'If game was a dominion game, number of node neutralizations'
    },
    nodeNeutralizeAssist: {
      type: GraphQLInt,
      description: 'If game was a dominion game, number of node neutralization assists'
    },
    objectivePlayerScore: {
      type: GraphQLInt,
      description: 'If game was a dominion game, player\'s objectives score, otherwise 0'
    },
    pentaKills: {
      type: GraphQLInt,
      description: 'Number of penta kills'
    },
    physicalDamageDealt: {
      type: GraphQLInt,
      description: 'Physical damage dealt'
    },
    physicalDamageDealtToChampions: {
      type: GraphQLInt,
      description: 'Physical damage dealt to champions'
    },
    physicalDamageTaken: {
      type: GraphQLInt,
      description: 'Physical damage taken'
    },
    quadraKills: {
      type: GraphQLInt,
      description: 'Number of quadra kills'
    },
    sightWardsBoughtInGame: {
      type: GraphQLInt,
      description: 'Sight wards purchased'
    },
    teamObjective: {
      type: GraphQLInt,
      description: 'If game was a dominion game, number of completed team objectives (i.e., quests)'
    },
    totalDamageDealt: {
      type: GraphQLInt,
      description: 'Total damage dealt'
    },
    totalDamageDealtToChampions: {
      type: GraphQLInt,
      description: 'Total damage dealt to champions'
    },
    totalDamageTaken: {
      type: GraphQLInt,
      description: 'Total damage taken'
    },
    totalHeal: {
      type: GraphQLInt,
      description: 'Total heal amount'
    },
    totalPlayerScore: {
      type: GraphQLInt,
      description: 'If game was a dominion game, player\'s total score, otherwise 0'
    },
    totalScoreRank: {
      type: GraphQLInt,
      description: 'If game was a dominion game, team rank of the player\'s total score (e.g., 1-5)'
    },
    totalTimeCrowdControlDealt: {
      type: GraphQLInt,
      description: 'Total dealt crowd control time'
    },
    totalUnitsHealed: {
      type: GraphQLInt,
      description: 'Total units healed'
    },
    towerKills: {
      type: GraphQLInt,
      description: 'Number of tower kills'
    },
    tripleKills: {
      type: GraphQLInt,
      description: 'Number of triple kills'
    },
    trueDamageDealt: {
      type: GraphQLInt,
      description: 'True damage dealt'
    },
    trueDamageDealtToChampions: {
      type: GraphQLInt,
      description: 'True damage dealt to champions'
    },
    trueDamageTaken: {
      type: GraphQLInt,
      description: 'True damage taken'
    },
    unrealKills: {
      type: GraphQLInt,
      description: 'Number of unreal kills'
    },
    visionWardsBoughtInGame: {
      type: GraphQLInt,
      description: 'Vision wards purchased'
    },
    wardsKilled: {
      type: GraphQLInt,
      description: 'Number of wards killed'
    },
    wardsPlaced: {
      type: GraphQLInt,
      description: 'Number of wards placed'
    },
    winner: {
      type: GraphQLBoolean,
      description: 'Flag indicating whether or not the participant won'
    },
  }),
});

const ParticipantType = new GraphQLObjectType({
  name: 'Participant',
  description: 'This object contains match participant information',
  fields: () => ({
    champion: {
      type: ChampionType,
      resolve: (participant, args, { loaders }) =>
        loaders.champion.load(participant.championId),
    },
    highestAchievedSeasonTier: { type: GraphQLString },
    // masteries	List[Mastery]	List of mastery information
    summoner: {
      type: SummonerType,
      resolve: (participant, args, { loaders }) =>
        loaders.summoner.load(participant.summonerId),
    },
    // runes	List[Rune]	List of rune information
    // spell1Id	int	First summoner spell ID
    // spell2Id	int	Second summoner spell ID
    stats: { type: ParticipantStatsType },
    // teamId	int	Team ID
    // timeline	ParticipantTimeline	Timeline data. Delta fields refer to values for the specified period (e.g., the gold per minute over the first 10 minutes of the game versus the second 20 minutes of the game. Diffs fields refer to the deltas versus the calculated lane opponent(s).
  }),
});

export default new GraphQLObjectType({
  name: 'Match',
  description: 'This object contains match detail information',
  fields: () => ({
    mapId: {
      type: GraphQLInt,
      description: 'Match map ID',
    },
    matchCreation: {
      type: DateType,
      description: 'Match creation time. Designates when the team select lobby is created and/or the match is made through match making, not when the game actually starts.'
    },
    matchDuration: {
      type: GraphQLInt,
      description: 'Match duration',
    },
    matchId: {
      type: GraphQLInt,
      description: 'ID of the match',
    },
    // matchMode	string	Match mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO, SIEGE)
    // matchType	string	Match type (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME)
    matchVersion: {
      type: GraphQLString,
      description: 'Match version',
    },
    // participantIdentities	List[ParticipantIdentity]	Participant identity information
    participants: {
      type: new GraphQLList(ParticipantType),
      definition: 'Participant information',
      resolve: (match) => (
        zipWith(
          (participant, participantIdentity) => ({
            ...participant,
            summonerId: participantIdentity.player && participantIdentity.player.summonerId,
          }),
          sortBy(prop('participantId'), match.participants),
          sortBy(prop('participantId'), match.participantIdentities),
        )
      ),
    },
    platformId:	{
      type: GraphQLString,
      description: 'Platform ID of the match',
    },
    // queueType	string	Match queue type (Legal values: CUSTOM, NORMAL_5x5_BLIND, RANKED_SOLO_5x5, RANKED_PREMADE_5x5, BOT_5x5, NORMAL_3x3, RANKED_PREMADE_3x3, NORMAL_5x5_DRAFT, ODIN_5x5_BLIND, ODIN_5x5_DRAFT, BOT_ODIN_5x5, BOT_5x5_INTRO, BOT_5x5_BEGINNER, BOT_5x5_INTERMEDIATE, RANKED_TEAM_3x3, RANKED_TEAM_5x5, BOT_TT_3x3, GROUP_FINDER_5x5, ARAM_5x5, ONEFORALL_5x5, FIRSTBLOOD_1x1, FIRSTBLOOD_2x2, SR_6x6, URF_5x5, ONEFORALL_MIRRORMODE_5x5, BOT_URF_5x5, NIGHTMARE_BOT_5x5_RANK1, NIGHTMARE_BOT_5x5_RANK2, NIGHTMARE_BOT_5x5_RANK5, ASCENSION_5x5, HEXAKILL, BILGEWATER_ARAM_5x5, KING_PORO_5x5, COUNTER_PICK, BILGEWATER_5x5, SIEGE, DEFINITELY_NOT_DOMINION_5x5, ARURF_5X5, TEAM_BUILDER_DRAFT_UNRANKED_5x5, TEAM_BUILDER_DRAFT_RANKED_5x5, TEAM_BUILDER_RANKED_SOLO, RANKED_FLEX_SR)
    region: {
      type: GraphQLString,
      description: 'Region where the match was played',
    },
    // season	string	Season match was played (Legal values: PRESEASON3, SEASON3, PRESEASON2014, SEASON2014, PRESEASON2015, SEASON2015, PRESEASON2016, SEASON2016, PRESEASON2017, SEASON2017)
    // teams	List[Team]	Team information
    // timeline	Timeline	Match timeline data (not included by default)
  }),
});