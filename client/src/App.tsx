import React from 'react';
import styled from 'styled-components';
import LoginPage from './components/LoginPage';

const Wrapper: React.FC = styled.div`
  text-align: center;
`;

const App: React.FC = () => (
  <Wrapper>
    <LoginPage />
  </Wrapper>
);

export default App;
