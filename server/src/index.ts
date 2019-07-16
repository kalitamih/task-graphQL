import { ApolloServer, gql } from 'apollo-server-koa';
import Koa from 'koa';

import resolvers from './resolvers';
import typeDefs from './schema';

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();

server.applyMiddleware({ app });

app.listen({ port: 4000 });
