import React from 'react'
import { InfoType } from '../../interfaces'

export const Info: React.FC<InfoType> = ({
  avatar,
  name,
  lastname,
  username,
  phone,
  email,
}) => {
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
  )
}
