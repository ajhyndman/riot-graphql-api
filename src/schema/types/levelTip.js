// @flow
import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';


export default new GraphQLObjectType({
  name: 'LevelTip',
  description: 'This object contains champion level tip data',
  fields: () => ({
    effect: { type: new GraphQLList(GraphQLString) },
    label: { type: new GraphQLList(GraphQLString) },
  }),
});
