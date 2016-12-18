import DataLoader from 'dataloader';

import fetch from '../fetch';
import key from './key';


const getMatchByID = (region) => (id) =>
  fetch(`https://${region}.api.pvp.net/api/lol/${region}/v2.2/match/${id}?${key}`)
    .then(response => response.json())
    .catch(err => { throw err; });

export default (region) => new DataLoader(
  ids => Promise.all(ids.map(getMatchByID(region)))
);
