// @flow
import DataLoader from 'dataloader';

import fetch from '../fetch';
import key from './key';
import type { Region } from './misc/region';


const getSummonersByName = (region) => (names) =>
  fetch(`https://${region}.api.pvp.net/api/lol/${region}/v1.4/summoner/by-name/${names.join(',')}?${key}`)
    .then(response => response.json())
    .then(json => names.map(name => json[name.toLowerCase()]));

export default (region: Region) => new DataLoader(
  getSummonersByName(region)
);
