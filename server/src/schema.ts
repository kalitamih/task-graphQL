const typeDefs = `
  type Token {
    token: String!
  }

  type User { 
    avatar: String
    email: String!
    username: String!   
    name: String
    lastname: String!  
    phone: String
    job: String
  }

  type Query {
    userInfo: User
    signinUser(username: String!, password: String!): Token    
  }
`

export default typeDefs
