import DataLoader from 'dataloader';
import { map } from 'ramda';

import fetch from '../fetch';
import key from './key';


const realmCodes = {
  br: 'BR1',
  eune: 'EUN1',
  euw: 'EUW1',
  jp: 'JP1',
  kr: 'KR',
  lan: 'LA1',
  las: 'LA2',
  na: 'NA1',
  oce: 'OC1',
  pbe: 'PBE1',
  ru: 'RU',
  tr: 'TR1',
};

const getCurrentGame = (region) => (id) =>
  fetch(`https://${region}.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/${realmCodes[region]}/${id}?${key}`)
    .then(response => response.json())
    .catch(err => { throw err; });

export default (region) => new DataLoader(
  (ids) => Promise.all(
    map(getCurrentGame(region), ids)
  )
);
