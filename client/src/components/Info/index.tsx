import React from 'react';

import styled from 'styled-components';

interface User {
  avatar: string;
  email: string;
  name: string;
  lastname: string;
  phone: string;
  job: string;
  username: string;
  __typename: string;
}

const Info: React.FC = (props: any) => {
  const { avatar, name, lastname, username, phone, email } = props;
  return (
    <div>
      <img src={avatar} alt="Avatar" />
      <div>
        <h3>
          {name} {lastname}
        </h3>
      </div>
      <ul>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
        <li>Username: {username}</li>
      </ul>
    </div>
  );
};

export default Info;
