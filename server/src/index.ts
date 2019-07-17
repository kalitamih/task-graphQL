import cors from '@koa/cors';
import { ApolloServer, gql } from 'apollo-server-koa';
import jwt from 'jsonwebtoken';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import resolvers from './resolvers';
import typeDefs from './schema';

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();

const KEY: string = 'Jw2pK7JS';

app.use(cors());
app.use(bodyParser());

app.use(async (ctx, next) => {
  const token = ctx.headers.authorization;
  if (token !== 'null') {
    const currentUser = await jwt.verify(token, KEY);
    ctx.currentUser = currentUser;
  }
  next();
});

server.applyMiddleware({ app });

app.listen({ port: 4000 });
