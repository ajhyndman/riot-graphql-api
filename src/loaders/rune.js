// @flow
import DataLoader from 'dataloader';
import { map } from 'ramda';

import fetch from '../fetch';
import key from './key';
import type { Region } from './misc/region';


// assume that the list of runes never changes, and cache it once.
let allRunes;

const getRunes = (region) => async function(ids) {
  if (!allRunes) {
    allRunes = await fetch(`https://${region}.api.pvp.net/api/lol/static-data/${region}/v1.2/rune?runeListData=all&${key}`)
      .then(response => response.json())
      .then(json => json.data);
  }
  return new Promise(
    (resolve) => {
      resolve(map((id) => allRunes[id], ids));
    }
  );
};

export default (region: Region) => new DataLoader(
  ids => getRunes(region)(ids)
);
