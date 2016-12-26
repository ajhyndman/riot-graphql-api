import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';


export default new GraphQLObjectType({
  name: 'MetaData',
  description: 'This object contains meta data',
  fields: () => ({
    isRune: { type: GraphQLBoolean },
    tier: { type: GraphQLString },
    type: { type: GraphQLString },
  }),
});