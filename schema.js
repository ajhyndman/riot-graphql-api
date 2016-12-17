import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  graphql,
} from 'graphql';


const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => 'Hello World',
    },
  }),
});


export default new GraphQLSchema({
  query: QueryType,
});
