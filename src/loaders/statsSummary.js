// @flow
import DataLoader from 'dataloader';
import { map, reduce } from 'ramda';

import fetch from '../fetch';
import key from './key';
import type { Region } from './misc/region';


// todo: have an int or enum variable for season id
const season = 'SEASON2017';

const getStatsSummary = (region) => (id) =>
  fetch(`https://${region}.api.pvp.net/api/lol/${region}/v1.3/stats/by-summoner/${id}/summary?${key}&season=${season}`)
    .then(response => response.json())
    .then(json => reduce(
      (acc, summary) => ({
        ...acc,
        [summary.playerStatSummaryType]: summary,
      }),
      {},
      json.playerStatSummaries
    ));

// find+propEq finds the first queueStats for the given mode or undefined
export default (region: Region) =>
  new DataLoader(
    ids => Promise.all(map(getStatsSummary(region), ids))
  );
