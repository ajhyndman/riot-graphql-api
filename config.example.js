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

// Riot API Key:
// https://developer.riotgames.com/docs/api-keys
export const RIOT_API_KEY = 'RGAPI-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
