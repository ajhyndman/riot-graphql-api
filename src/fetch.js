import fetch from 'node-fetch';
import { pick } from 'ramda';

import log from './log';
import { RIOT_API_KEY } from '../secret';


/**
 * Transparently wrap the fetch API to inject logging and error-handling behaviour.
 */
export default function wrappedFetch(...args) {
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
          header: pick(['x-rate-limit-count'], response.headers._headers),
        },
      };
      if (response.status === 200) {
        log.info(logData, 'RESPONSE <- RIOT REST API');
      } else if (response.status === 429) {
        // if we were rate-limited
        log.error(logData, 'RESPONSE <- RIOT REST API');
        // wait 10 seconds, and try again D:
        return new Promise((resolve, reject) => {
          setTimeout(
            () => wrappedFetch(...args)
              .then(resolve)
              .catch(reject),
            10000
          );
        });
      } else {
        log.error(logData, 'RESPONSE <- RIOT REST API');
      }

      // return a promise (to preserve the fetch API)
      return new Promise(resolve => resolve(response));
    });
}
