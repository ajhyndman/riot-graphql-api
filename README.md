# Riot GraphQL API
A GraphQL wrapper for the official Riot Games REST API

## Usage

This repository is an express-based proxy server for the official Riot API.
To run it yourself:

* [Register for a Riot API Key](https://developer.riotgames.com/docs/getting-started)
* Clone this repository: `git clone https://github.com/ajhyndman/riot-graphql-api.git`
* Install dependencies: `yarn install`
* Create a new file at the root of the project, named `secret.js` with contents:

```js
export const RIOT_API_KEY = 'YOUR-KEY-HERE';
```

* Launch the server: `yarn start`
* Open `localhost:3000` in a browser to explore the API using GraphiQL.
