import DataLoader from 'dataloader';
import { map } from 'ramda';

import fetch from '../fetch';
import key from './key';


// assume that the list of masteries never changes, and cache it once.
let allMasteries;

const getMasteries = (region) => async function(ids) {
  if (!allMasteries) {
    allMasteries = await fetch(`https://${region}.api.pvp.net/api/lol/static-data/${region}/v1.2/mastery?masteryListData=all&${key}`)
      .then(response => response.json())
      .then(json => json.data)
      .catch(err => { throw err; });
  }
  return new Promise(
    (resolve) => {
      resolve(map((id) => allMasteries[id], ids));
    }
  );
};

export default (region) => new DataLoader(
  ids => getMasteries(region)(ids)
);
