import { ApolloQueryResult, OperationVariables } from 'apollo-boost'

export interface InfoType {
  avatar: string
  email: string
  name: string
  lastname: string
  phone: string
  job: string
  username: string
  __typename: string
}

export interface UserInfo {
  userInfo: InfoType | null
}

export interface LoginProps {
  refetch: (
    variables?: OperationVariables | undefined
  ) => Promise<ApolloQueryResult<any>>
  session: UserInfo
}
