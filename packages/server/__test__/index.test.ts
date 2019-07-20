import { request } from 'graphql-request'

import { LINK } from '../constants'

const query = `{
    signinUser(username: "kalitamih", password: "1991") {
      token
    }
  }`

test('Check token', async () => {
  const response = await request(LINK, query)

  const { signinUser } = response

  const { token } = signinUser

  expect(token.length).toEqual(77)
})
