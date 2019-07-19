import { configure } from 'enzyme'
import { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import faker from 'faker'
import React from 'react'
import { Info } from '../components/Info'

configure({ adapter: new EnzymeAdapter() })

const testUser = {
  __typename: 'User',
  avatar: faker.internet.avatar(),
  email: faker.internet.email(),
  job: faker.name.jobDescriptor(),
  lastname: faker.name.lastName(),
  name: faker.name.firstName(),
  phone: faker.phone.phoneNumber(),
  username: faker.internet.userName(),
}

it('test phone number', () => {
  const component = shallow(<Info {...testUser} />)
  const phone = component
    .find('h4')
    .at(1)
    .text()
  expect(phone).toEqual(testUser.phone)
})
