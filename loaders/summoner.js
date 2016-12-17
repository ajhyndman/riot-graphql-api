import DataLoader from 'dataloader';
import fetch from 'node-fetch';

import key from './key';


const getSummonerByName = (region) => (name) =>
  fetch(`https://${region}.api.pvp.net/api/lol/${region}/v1.4/summoner/by-name/${name}?${key}`)
    .then(response => response.json())
    .then(json => json[name.toLowerCase()]);

export default (region) => new DataLoader(
  names => Promise.all(names.map(getSummonerByName(region)))
);
