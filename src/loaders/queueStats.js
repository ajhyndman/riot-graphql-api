import DataLoader from 'dataloader';
import { find, propEq } from 'ramda';

import fetch from '../fetch';
import key from './key';

const season = 'SEASON2017';

const getQueueStats = (region) => (id) =>
    fetch(`https://${region}.api.pvp.net/api/lol/${region}/v1.3/stats/by-summoner/${id}/summary?${key}&season=${season}`)
      .then(response => response.json())
      .then(json => (console.log("almost: gqs reponse: ", json.playerStatSummaries), json.playerStatSummaries))
      .catch(err => { throw err; });
d
//console.log("almost:",getQueueStats("na")(21913759);

// find+propEq finds the first queueStats for the given mode or undefined
export default (region) => (mode) => {
  const qsf = getQueueStats(region);
  const qsf_and_find = (id) => find(propEq('playerStatSummaryType', mode))(qsf(id));
  //console.log("almost: queue stats:", qs);
  const f = (ids) => (console.log("almost: ids are: ", ids), console.log("almost: qsf ids are:", ids.map(qsf_and_find)), Promise.all(ids.map(qsf_and_find))); // function from list ids to list of promises
  return new DataLoader(f);
};


//new DataLoader(
//  ids => Promise.all(ids.map(find(propEq('playerStatSummaryType', mode))(getQueueStats(region))))
//);
