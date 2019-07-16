const typeDefs = `
  type Token {
    token: String!
  }

  type Query {
    signinUser(username: String!, password: String!): Token
  }
`;

export default typeDefs;
