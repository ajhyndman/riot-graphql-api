import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { prop, sortBy, zipWith } from 'ramda';

import DateType from './date';
import MapType from './map';
import ParticipantType from './participant';


export default new GraphQLObjectType({
  name: 'Match',
  description: 'This object contains match detail information',
  fields: () => ({
    // TODO: link map information here
    map: {
      type: MapType,
      description: 'Match map',
      resolve: (match, args, { loaders }) =>
        loaders.map.load(match.mapId),
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
    season: {
      type: GraphQLString,
      description: 'Season match was played (Legal values: PRESEASON3, SEASON3, PRESEASON2014, SEASON2014, PRESEASON2015, SEASON2015, PRESEASON2016, SEASON2016, PRESEASON2017, SEASON2017)',
    },
    // teams	List[Team]	Team information
    // timeline	Timeline	Match timeline data (not included by default)
  }),
});