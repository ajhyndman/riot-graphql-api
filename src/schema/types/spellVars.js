import {
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';


export default new GraphQLObjectType({
  name: 'SpellVars',
  description: 'This object contains spell vars data',
  fields: () => ({
    coeff: { type: new GraphQLList(GraphQLFloat) },
    dyn: { type: GraphQLString },
    key: { type: GraphQLString },
    link: { type: GraphQLString },
    ranksWith: { type: GraphQLString },
  })
});
