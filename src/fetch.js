import fetch from 'node-fetch';

import log from './log';
import { RIOT_API_KEY } from '../secret';


export default (...args) => {
  const url = args[0].replace(RIOT_API_KEY, '***');
  log.info({ url }, 'FETCH');
  log.debug({ args: [url, ...(args.slice(1))] }, 'FETCH');
  return fetch(...args)
    .then((res) => {
      log.info({ res: { header: res.headers, statusCode: res.status, url } }, 'RESPONSE');
      return new Promise(resolve => resolve(res));
    });
};
