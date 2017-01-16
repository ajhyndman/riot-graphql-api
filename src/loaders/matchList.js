import DataLoader from 'dataloader';

import fetch from '../fetch';
import key from './key';


const getMatchListBySummoner = (region) => (summonerID) =>
  fetch(`https://${region}.api.pvp.net/api/lol/${region}/v2.2/matchlist/by-summoner/${summonerID}?${key}`)
    .then(response => response.json())
    .then(json => json.matches);

export default (region) => new DataLoader(
  ids => Promise.all(ids.map(getMatchListBySummoner(region)))
);
