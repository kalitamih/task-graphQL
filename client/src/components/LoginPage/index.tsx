import React, { useState } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { SIGNIN_USER } from '../../queries';
import { Button, Error, Input, Title, Wrapper } from '../../style';
import Info from '../Info';

interface SigninUser {
  signinUser: {
    token: string;
  };
}

interface SigninUserVariables {
  username: string;
  password: string;
}

const Login: React.FC = (props: any) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    if (name === 'login') {
      setLogin(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event: React.FormEvent, client: any) => {
    event.preventDefault();
    setError('');
    try {
      const { data } = await client.query({
        query: SIGNIN_USER,
        variables: { username: login, password },
      });
      localStorage.setItem('token', data.signinUser.token);
      await props.refetch();
      setLogin('');
      setPassword('');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignout = (client: any) => {
    localStorage.setItem('token', '');
    client.resetStore();
  };

  return (
    <ApolloConsumer>
      {client => (
        <Wrapper>
          {!props.session.userInfo && (
            <form
              onSubmit={event => {
                handleSubmit(event, client);
              }}
            >
              <Title>Login:</Title>
              <Input
                type="text"
                name="login"
                value={login}
                required={true}
                onChange={handleChange}
              />
              <Title>Password:</Title>
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
          {props.session.userInfo && (
            <div>
              <Info {...props.session.userInfo} />
              <Button onClick={() => handleSignout(client)}>Signout</Button>
            </div>
          )}
          {error && <Error>{error}</Error>}
        </Wrapper>
      )}
    </ApolloConsumer>
  );
};

export default Login;
