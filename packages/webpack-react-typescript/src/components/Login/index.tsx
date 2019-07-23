import { ApolloClient } from 'apollo-boost'
import React, { useState } from 'react'
import { ApolloConsumer } from 'react-apollo'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import { LoginProps } from '../../interfaces'
import { SIGNIN_USER } from '../../queries'
import { Info } from '../Info'

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  text-align: center;
  margin: 150px auto;
`
const Error = styled.h2`
  color: #ff0000;
`
const Input = styled.input`
  padding-left: 10px;
  width: 300px;
  height: 35px;
  font-size: 20px;
  border: 2px solid #cccccc;
  border-radius: 10px;
  background-color: #ffffff;
  &:hover,
  &:focus {
    border: 2px solid #808080;
  }
`
const Button = styled.button`
  background-color: #4caf50;
  border: solid 2px #4caf50;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 32px;
  display: inline-block;
  cursor: pointer;
  &:hover,
  &focus {
    background-color: #ffffff;
    color: #4caf50;
  }
  &:active {
    background-color: #4caf50;
    color: #ffffff;
  }
`
const Login: React.FC<LoginProps> = ({ refetch, session }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target
    if (name === 'login') {
      setLogin(value)
    }
    if (name === 'password') {
      setPassword(value)
    }
  }

  const handleSubmit = async (
    event: React.FormEvent,
    client: ApolloClient<any>
  ) => {
    event.preventDefault()
    setError('')
    try {
      const { data } = await client.query({
        query: SIGNIN_USER,
        variables: { username: login, password },
      })
      localStorage.setItem('token', data.signinUser.token)
      await refetch()
      setLogin('')
      setPassword('')
    } catch (err) {
      setError(err.message)
    }
  }

  const handleSignout = (client: ApolloClient<any>) => {
    localStorage.setItem('token', '')
    client.resetStore()
  }

  return (
    <ApolloConsumer>
      {client => (
        <Wrapper>
          {!session.userInfo && (
            <form
              // tslint:disable-next-line: jsx-no-lambda
              onSubmit={event => {
                handleSubmit(event, client)
              }}
            >
              <h1>Logn:</h1>
              <Input
                type="text"
                name="login"
                value={login}
                required={true}
                onChange={handleChange}
              />
              <h1>Password:</h1>
              <Input
                type="password"
                name="password"
                value={password}
                required={true}
                onChange={handleChange}
              />
              <br />
              <br />
              <Button type="submit">Submit</Button>
            </form>
          )}
          {session.userInfo && (
            <div>
              <Info {...session.userInfo} />
              <Button onClick={() => handleSignout(client)}>Signout</Button>
            </div>
          )}
          {error && <Error>{error}</Error>}
        </Wrapper>
      )}
    </ApolloConsumer>
  )
}

export default hot(module)(Login)
