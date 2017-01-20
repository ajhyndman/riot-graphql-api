/**
 * Use this file to configure your Riot GraphQL API proxy server!
 */

// What port should this server listen on?
export const PORT = 3000;

// Which API region should this server query against?
// Should be one of:
// 'br' 'eune' 'euw' 'jp' 'kr' 'lan' 'las' 'na' 'oce' 'ru' 'tr'
export const REGION = 'na';

// How long should this server wait before retrying a rate-limited request?
// (value in milliseconds)
export const RETRY_TIMEOUT = 10000;

// How many requests should the server make to the same API per timeout?
export const RATE_LIMIT = 10;

// Riot API Key:
// https://developer.riotgames.com/docs/api-keys
export const RIOT_API_KEY = 'RGAPI-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
