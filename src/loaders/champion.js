import DataLoader from 'dataloader';

import fetch from '../fetch';
import key from './key';


const getChampionByID = (region) => (id) =>
  fetch(`https://${region}.api.pvp.net/api/lol/static-data/${region}/v1.2/champion/${id}?champData=all&${key}`)
    .then(response => response.json())
    .catch(err => { throw err; });

export default (region) => new DataLoader(
  ids => Promise.all(ids.map(getChampionByID(region)))
);
