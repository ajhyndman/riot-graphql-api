/**
 * Use this file to configure your Riot GraphQL API proxy server!
 */

// What port should this server listen on?
export const PORT = 3000;

// Which API region should this server query against?
export const REGION = 'oce';

// How long should this server wait before retrying a rate-limited request?
// (value in milliseconds)
export const RETRY_TIMEOUT = 10000;
