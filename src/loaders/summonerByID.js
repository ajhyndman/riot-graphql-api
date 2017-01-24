// @flow
import DataLoader from 'dataloader';
import { flatten, map, splitEvery } from 'ramda';

import fetch from '../fetch';
import key from './key';
import type { Region } from './misc/region';


/**
 * Get up to 40 summoners in one API call.
 */
const getSummonersById = (region) => (ids) =>
  fetch(`https://${region}.api.pvp.net/api/lol/${region}/v1.4/summoner/${ids.join(',')}?${key}`)
    .then(response => response.json())
    .then(json => ids.map(id => json[id]));

export default (region: Region) => new DataLoader(
  (ids) => new Promise((resolve) => {
    Promise.all(
      // Group summoner IDs into sets of 40 IDs, and pass those to our fetch call.
      map(getSummonersById(region), splitEvery(40, ids))
    )
      // Once all fetch calls have resolved, flatten the result back into an
      // array matching the order of the original ID list.
      .then((groupedData) => {
        resolve(flatten(groupedData));
      });
  })
);
