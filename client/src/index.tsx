import React from 'react'
import ReactDOM from 'react-dom'
import { Login } from './components/Login'
import { withSession } from './components/WithSession'
import { LINK } from './constants'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  },
  onError: ({ networkError }) => {
      if (networkError) {
      console.log('networkError', networkError)
    }
  },
  request: operation => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token === null ? '' : token,
      },
    })
  },
  uri: LINK,
})

const LoginPageWithSession = withSession(Login)

ReactDOM.render(
  <ApolloProvider client={client}>
    <LoginPageWithSession />
  </ApolloProvider>,
  document.getElementById('root')
)
