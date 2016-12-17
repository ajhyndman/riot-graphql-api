import DataLoader from 'dataloader';
import fetch from 'node-fetch';

import key from './key';


const getChampions = (region) => () =>
  fetch(`https://${region}.api.pvp.net/api/lol/static-data/${region}/v1.2/champion?champData=all&${key}`)
    .then(response => response.json())
    .then(json => Object.values(json.data))
    .catch(err => { throw err; });

export default (region) => new DataLoader(
  keys => Promise.all(keys.map(getChampions(region)))
);
