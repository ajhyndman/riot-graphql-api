// @flow
import DataLoader from 'dataloader';

import fetch from '../fetch';
import key from './key';
import type { Region } from './misc/region';


const getChallengerLeaguesByQueueType = (region) => (queueType) =>
  fetch(`https://${region}.api.pvp.net/api/lol/${region}/v2.5/league/challenger?type=${queueType}&${key}`)
    .then(response => response.json());

export default (region: Region) => new DataLoader(
  queueTypes => Promise.all(queueTypes.map(
    queueType => getChallengerLeaguesByQueueType(region)(queueType)
  ))
);
