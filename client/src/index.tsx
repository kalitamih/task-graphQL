import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage';
import withSession from './components/WithSession';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log('networkError', graphQLErrors);
    }
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
  uri: 'http://localhost:4000/graphql',
});

const LoginPageWithSession = withSession(LoginPage);

ReactDOM.render(
  <ApolloProvider client={client}>
    <LoginPageWithSession />
  </ApolloProvider>,
  document.getElementById('root')
);
