import DataLoader from 'dataloader';
import { map } from 'ramda';

import fetch from '../fetch';
import key from './key';


// assume that the list of maps never changes, and cache it once.
let allMaps;

const getMaps = (region) => async function(ids) {
  if (!allMaps) {
    allMaps = await fetch(`https://${region}.api.pvp.net/api/lol/static-data/${region}/v1.2/map?${key}`)
      .then(response => response.json())
      .then(json => json.data)
      .catch(err => { throw err; });
  }
  return new Promise(
    (resolve) => {
      resolve(map((id) => allMaps[id], ids));
    }
  );
};

export default (region) => new DataLoader(
  ids => getMaps(region)(ids)
);
