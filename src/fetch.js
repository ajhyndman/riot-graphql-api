import fetch from 'node-fetch';
import { pick } from 'ramda';

import log from './log';
import { RIOT_API_KEY } from '../secret';


/**
 * Transparently wrap the fetch API and inject logging behaviour.
 */
export default (...args) => {
  // obfuscate the API key in logs
  const url = args[0].replace(RIOT_API_KEY, '***');

  // log the outgoing request
  log.info({ url }, 'REQUEST -> RIOT REST API');
  log.debug({ args: [url, ...(args.slice(1))] }, 'FETCH');

  return fetch(...args)
    .then((response) => {
      // log the incoming response
      const logData = {
        res: {
          status: response.status,
          url,
          header: pick(['x-rate-limit-count'], response.headers['_headers']),
        },
      };
      if (response.status === 200) {
        log.info(logData, 'RESPONSE <- RIOT REST API');
      } else {
        log.error(logData, 'RESPONSE <- RIOT REST API');
      }

      // finally, return a promise (to preserve the fetch API)
      return new Promise(resolve => resolve(response));
    });
};
