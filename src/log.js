import bunyan from 'bunyan';


export default bunyan.createLogger({
  level: 'trace',
  name: 'riot-graphql-api',
});
