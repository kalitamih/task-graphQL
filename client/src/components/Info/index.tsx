import React, { useState } from 'react';

interface InfoType {
  avatar: string;
  email: string;
  name: string;
  lastname: string;
  phone: string;
  job: string;
  username: string;
  __typename: string;
}

const Info: React.FC<InfoType> = props => {
  const { avatar, name, lastname, username, phone, email } = props;
  return (
    <div>
      <img src={avatar} alt="Avatar" width="128" height="128" />
      <div>
        <h2>
          {name} {lastname}
        </h2>
      </div>
      <h4>{email}</h4>
      <h4>{phone}</h4>
      <h4>{username}</h4>
    </div>
  );
};

export default Info;
