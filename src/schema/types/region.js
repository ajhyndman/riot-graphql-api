// @flow
import {
  GraphQLEnumType,
} from 'graphql';


export default new GraphQLEnumType({
  name: 'Region',
  description: 'Riot exposes APIs specific to each region',
  values: {
    br: { description: 'Brazil' },
    eune: { description: 'EU Nordic & East' },
    euw: { description: 'EU West' },
    jp: { description: 'Japan' },
    kr: { description: 'Korea' },
    lan: { description: 'Latin America North' },
    las: { description: 'Latin America South' },
    na: { description: 'North America' },
    oce: { description: 'Oceania' },
    pbe: { description: 'Public Beta Environment' },
    ru: { description: 'Russia' },
    tr: { description: 'Turkey' },
  },
});
