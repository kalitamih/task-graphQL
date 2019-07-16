import { ApolloServer, gql } from 'apollo-server-koa';
import http from 'http';
import Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

http.createServer(app.callback()).listen(3001);
