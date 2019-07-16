import React from 'react';
import styled from 'styled-components';

const WrapperLogin: React.FC = styled.div`
  text-align: center;
`;

const Login: React.FC = () => {
  return (
    <WrapperLogin>
      <h1>React</h1>
      <form>
        Login:
        <br />
        <input type="text" name="login" required={true} />
        <br />
        <br />
        Password:
        <br />
        <input type="password" name="password" required={true} />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </WrapperLogin>
  );
};

export default Login;
