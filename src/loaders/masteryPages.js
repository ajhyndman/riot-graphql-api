import DataLoader from 'dataloader';
import { map, splitEvery, unnest } from 'ramda';

import fetch from '../fetch';
import key from './key';


/**
 * Get up to 40 summoners' masteries in one API call.
 */
const getMasteryPagesBySummoner = (region) => (ids) =>
  fetch(`https://${region}.api.pvp.net/api/lol/${region}/v1.4/summoner/${ids.join(',')}/masteries?${key}`)
    .then(response => response.json())
    .then(json => ids.map(id => json[id].pages))
    .catch(err => { throw err; });

export default (region) => new DataLoader(
  (ids) => new Promise((resolve) => {
    Promise.all(
      // Group summoner IDs into sets of 40 IDs, and pass those to our fetch call.
      map(getMasteryPagesBySummoner(region), splitEvery(40, ids))
    )
      // Once all fetch calls have resolved, flatten the result back into an
      // array matching the order of the original ID list.
      .then((groupedData) => {
        resolve(unnest(groupedData));
      });
  })
);
