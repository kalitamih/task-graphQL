import cors from '@koa/cors'
import { ApolloServer, gql } from 'apollo-server-koa'
import jwt from 'jsonwebtoken'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'

import resolvers from './resolvers'
import typeDefs from './schema'

import { KEY, PORT } from '../constants'

const server = new ApolloServer({
  context: async ({ ctx }) => {
    const token = ctx.headers.authorization
    let currentUser: string | object = ''
    if (token) {
      currentUser = await jwt.verify(token, KEY)
      return { currentUser }
    }
    return { currentUser }
  },
  resolvers,
  typeDefs,
})

const app = new Koa()

app.use(cors())
app.use(bodyParser())

server.applyMiddleware({ app })

app.listen({ port: PORT })
