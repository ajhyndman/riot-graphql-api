![Riot - GraphQL](https://github.com/ajhyndman/riot-graphql-api/raw/master/src/riot-graphql.png)

# Riot GraphQL API

[![yarn compatible](https://img.shields.io/badge/yarn-compatible-4BC51D.svg?style=flat)](https://yarnpkg.com/)

A GraphQL wrapper for the official Riot Games REST API

![image](https://cloud.githubusercontent.com/assets/11449340/21294116/fe812258-c589-11e6-85ff-c5f57e070518.png)

## Usage

This repository is an express-based proxy server for the official Riot API.
To run it yourself:

* [Register for a Riot API Key](https://developer.riotgames.com/docs/getting-started)
* Clone this repository: `git clone https://github.com/ajhyndman/riot-graphql-api.git`
* Install dependencies: `npm install`
* Copy the file `config.example.js` and rename it to `config.js`.  Update `RIOT_API_KEY` with the key
you acquired above.
* Launch the server: `npm start`
* Open `localhost:3000` in a browser to explore the API using GraphiQL.

## Disclaimer

Riot GraphQL API isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
