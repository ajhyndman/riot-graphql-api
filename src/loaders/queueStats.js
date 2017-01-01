import DataLoader from 'dataloader';
import { find, propEq } from 'ramda';

import fetch from '../fetch';
import key from './key';


// todo: have an int or enum variable for season id
const season = 'SEASON2017';

const getQueueStats = (region) => (id) =>
    fetch(`https://${region}.api.pvp.net/api/lol/${region}/v1.3/stats/by-summoner/${id}/summary?${key}&season=${season}`)
      .then(response => response.json())
      .then(json => (json.playerStatSummaries))
     .catch(err => { throw err; });

// find+propEq finds the first queueStats for the given mode or undefined
export default (region) => (mode) => {
  const qsf = getQueueStats(region);
  const qsf_and_find = (id) => qsf(id).then(qstats => find(propEq('playerStatSummaryType', mode))(qstats));
  const f = (ids) => (Promise.all(ids.map(qsf_and_find))); // function from list ids to list of promises
  return new DataLoader(f);
};
