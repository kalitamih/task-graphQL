import React from 'react'

import { ApolloError } from 'apollo-client'
import { ApolloQueryResult } from 'apollo-client/core/types'
import { OperationVariables, Query } from 'react-apollo'
import styled from 'styled-components'
import { LoginProps, UserInfo } from '../../interfaces'
import { GET_USER_INFO } from '../../queries'

const NetworkError = styled.div`
  text-align: center;
  margin: 150px auto;
  color: #ff0000;
`

export const withSession = (Component: React.FC<LoginProps>) => () => (
  <Query query={GET_USER_INFO}>
    {({
      data,
      loading,
      error,
      refetch,
    }: {
      data: UserInfo
      loading: boolean
      error?: ApolloError
      refetch: (
        variables?: OperationVariables | undefined
      ) => Promise<ApolloQueryResult<any>>
    }) => {
      if (loading) {
        return null
      }
      if (error) {
        return (
          <NetworkError>
            <h1>
              Unfortunately, we encountered with problem. Possibly, server is
              unreachable.
            </h1>
            <h2>{error.message}</h2>
          </NetworkError>
        )
      }
      console.log('error inside withSession', error)
      return <Component refetch={refetch} session={data} />
    }}
  </Query>
)
