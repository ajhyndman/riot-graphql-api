import DataLoader from 'dataloader';
import { map } from 'ramda';

import fetch from '../fetch';
import key from './key';


// assume that the list of items never changes, and cache it once.
let allItems;

const getItems = (region) => async function(ids) {
  if (!allItems) {
    allItems = await fetch(`https://${region}.api.pvp.net/api/lol/static-data/${region}/v1.2/item?itemListData=all&${key}`)
      .then(response => response.json())
      .then(json => json.data);
  }
  return new Promise(
    (resolve) => {
      resolve(map((id) => allItems[id], ids));
    }
  );
};

export default (region) => new DataLoader(
  ids => getItems(region)(ids)
);
