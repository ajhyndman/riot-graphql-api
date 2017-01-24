// @flow
import { GraphQLScalarType } from 'graphql';


export default new GraphQLScalarType({
  name: 'Date',
  description: 'Date object',
  // $FlowIssue: GraphQL type definition can't infer internal value type
  serialize: (value) => new Date(value).toLocaleString(),
  parseValue: (value) => value,
  parseLiteral: (ast) => ast.value
    ? ast.value
    : undefined,
});
