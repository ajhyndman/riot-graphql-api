import express from 'express';
import graphQLHTTP from 'express-graphql';

import schema from './schema';


const app = express();

app.use(graphQLHTTP({
  schema,
  // TODO: set graphiql to false in production
  graphiql: true,
}));


const port = 3000;

app.listen(port);
console.log('listening on port:', port);
