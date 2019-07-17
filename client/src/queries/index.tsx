import { gql } from 'apollo-boost';

export const SIGNIN_USER = gql`
  query($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;
