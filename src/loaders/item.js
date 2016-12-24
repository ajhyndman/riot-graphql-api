import DataLoader from 'dataloader';
import { map } from 'ramda';

import fetch from '../fetch';
import key from './key';


// assume that the list of items never changes, and cache it once.
let allItems;

const getAllItems = (region) => (ids) => {
  if (!allItems) {
    return fetch(`https://${region}.api.pvp.net/api/lol/static-data/${region}/v1.2/item?itemListData=all&${key}`)
      .then(response => response.json())
      .then(json => {
        allItems = json.data;
        return map((id) => allItems[id], ids)
      })
      .catch(err => { throw err; });
  }
  return new Promise(
    (resolve) => {
      resolve(map((id) => allItems[id], ids));
    }
  );
}

export default (region) => new DataLoader(
  ids => getAllItems(region)(ids)
);
