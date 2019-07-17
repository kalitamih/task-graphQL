const typeDefs = `
  type Token {
    token: String!
  }

  type User { 
    username: String!      
  }

  type Query {
    userInfo: User
    signinUser(username: String!, password: String!): Token    
  }
`;

export default typeDefs;
