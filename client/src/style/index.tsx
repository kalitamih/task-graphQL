import styled from 'styled-components';

export const Wrapper: React.FC = styled.div`
  width: 400px;
  height: 400px;
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Error: React.FC = styled.h2`
  text-align: center;
  color: #ff0000;
`;

export const Title: React.FC = styled.h1`
  text-align: center;
`;

export const Input = styled.input`
  padding-left: 10px;
  width: 300px;
  height: 35px;
  font-size: 20px;
  border: 2px solid #cccccc;
  border-radius: 10px;
  background-color: #ffffff;
  outline: none; /* Исчезает видимая табуляция */ 
`;

export const Button = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  &:active {
    background-color: #db7093;
    color: white;
  }
`;
