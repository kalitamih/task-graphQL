import React, { useState } from 'react';
import { ApolloConsumer } from 'react-apollo';
import styled from 'styled-components';
import { SIGNIN_USER } from '../../queries';


const WrapperLogin: React.FC = styled.div`
  text-align: center;
`;

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
    const { data } = await client.query({
      query: SIGNIN_USER,
      variables: { username: login, password },
    });
    localStorage.setItem('token', data.signinUser.token);
    await props.refetch();
    setLogin('');
    setPassword('');
  };

  const handleSignout = (client: any) => {
    localStorage.setItem('token', '');
    client.resetStore();
    console.log(client);
  };
  
  console.log(props);

  return (
    <WrapperLogin>
      <ApolloConsumer>
        {client => (
          <div>
            <form
              onSubmit={event => {
                handleSubmit(event, client);
              }}
            >
              Login:
              <br />
              <input
                type="text"
                name="login"
                value={login}
                required={true}
                onChange={handleChange}
              />
              <br />
              <br />
              Password:
              <br />
              <input
                type="password"
                name="password"
                value={password}
                required={true}
                onChange={handleChange}
              />
              <br />
              <br />
              <input type="submit" value="Submit" />
            </form>
            <button onClick={() => handleSignout(client)}>Signout</button>
          </div>
        )}
      </ApolloConsumer>
    </WrapperLogin>
  );
};

export default Login;
