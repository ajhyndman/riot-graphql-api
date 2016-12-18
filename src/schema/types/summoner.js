import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';


export default new GraphQLObjectType({
  name: 'Summoner',
  description: 'represents a summoner',

  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    profileIconId: {
      type: GraphQLInt,
    },
    revisionDate: {
      type: GraphQLInt,
    },
    summonerLevel: {
      type: GraphQLInt,
    },
  }),
});
