import { GraphQLScalarType } from 'graphql';


export default new GraphQLScalarType({
  name: 'Date',
  description: 'Date object',
  serialize: (date) => date.valueOf(),
  parseValue: (date) => new Date(date),
});
