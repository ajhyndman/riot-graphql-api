import DataLoader from 'dataloader';

import fetch from '../fetch';
import key from './key';


// todo: have an int or enum variable for season id
const season = 'SEASON2017';

const getRankedStatsBySummoner = (region) => (summonerID) =>
  fetch(`https://${region}.api.pvp.net/api/lol/${region}/v1.3/stats/by-summoner/${summonerID}/ranked?${season}&${key}`)
    .then(response => response.json());

export default (region) => new DataLoader(
  ids => Promise.all(ids.map(getRankedStatsBySummoner(region)))
);
