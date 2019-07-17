"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeDefs = "\n  type Token {\n    token: String!\n  }\n\n  type User { \n    username: String!      \n  }\n\n  type Query {\n    userInfo: User\n    signinUser(username: String!, password: String!): Token    \n  }\n";
exports.default = typeDefs;
