"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_koa_1 = require("apollo-server-koa");
var koa_1 = __importDefault(require("koa"));
var resolvers_1 = __importDefault(require("./resolvers"));
var schema_1 = __importDefault(require("./schema"));
var server = new apollo_server_koa_1.ApolloServer({ typeDefs: schema_1.default, resolvers: resolvers_1.default });
var app = new koa_1.default();
server.applyMiddleware({ app: app });
app.listen({ port: 4000 });
