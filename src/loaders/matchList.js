// @flow
import DataLoader from 'dataloader';
import { flatten, splitEvery } from 'ramda';

import fetch from '../fetch';
import key from './key';
import { RATE_LIMIT, RETRY_TIMEOUT } from '../../config';
import type { Region } from './misc/region';


const getMatchListBySummoner = (region) => (summonerID) =>
  fetch(`https://${region}.api.pvp.net/api/lol/${region}/v2.2/matchlist/by-summoner/${summonerID}?${key}`)
    .then(response => response.json())
    .then(json => json.matches);

export default (region: Region) => new DataLoader(
  ids => new Promise((resolve) => {
    Promise.all(
      // split Ids into groups of ten.
      splitEvery(RATE_LIMIT, ids).map((tenIds, i) =>
        // delay each group by 10 seconds, cumulatively
        new Promise((resolve) => {
          setTimeout(
            () => resolve(tenIds.map(getMatchListBySummoner(region))),
            RETRY_TIMEOUT * i
          );
        })
      )
    )
      // Once all fetch calls have resolved, flatten the result back into an
      // array matching the order of the original ID list.
      .then((groupedData) => {
        resolve(flatten(groupedData));
      });
  })
);
