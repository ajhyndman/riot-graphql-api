import DataLoader from 'dataloader';
import { find, propEq } from 'ramda';

import fetch from '../fetch';
import key from './key';

const getQueueStats = (region) => (id) =>
  async function(modes) {
    fetch(`https://${region}.api.pvp.net/api/lol/${region}/v1.3/stats/by-summoner/${id}?${season}`)
      .then(response => response.json())
      .then(json => json.playerStatSummaries)
      .catch(err => { throw err; });
};

// find+propEq finds the first queueStats for the given mode or undefined
export default (region) => (mode) => new DataLoader(
  ids => Promise.all(ids.map(find(propEq('playerStatSummaryType', mode))(getQueueStats(region))))
);
