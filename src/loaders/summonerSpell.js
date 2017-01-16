import DataLoader from 'dataloader';
import { reduce, map } from 'ramda';

import fetch from '../fetch';
import key from './key';

// assume that the list of summoner spells never changes, and cache it once.
let allSummonerSpells;

const getSummonerSpells = (region) => async function(ids) {
  if (!allSummonerSpells) {
    allSummonerSpells = await fetch(`https://${region}.api.pvp.net/api/lol/static-data/${region}/v1.2/summoner-spell?spellData=all&${key}`)
      .then(response => response.json())
      .then(json => reduce(
        (acc, summonerSpell) => ({ ...acc, [summonerSpell.id]: summonerSpell }),
        {},
        Object.values(json.data)
      ));
  }
  return new Promise(
    (resolve) => {
      resolve(map((id) => allSummonerSpells[id], ids));
    }
  );
};

export default (region) => new DataLoader(
  ids => getSummonerSpells(region)(ids)
);
