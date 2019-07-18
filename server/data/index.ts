import faker from 'faker'

import { PASSWORD, TEST_USER } from '../constants'
import { User } from '../data/interfaces'

const users: User[] = [
  {
    avatar: faker.internet.avatar(),
    email: faker.internet.email(),
    job: faker.name.jobDescriptor(),
    lastname: faker.name.lastName(),
    name: faker.name.firstName(),
    password: PASSWORD,
    phone: faker.phone.phoneNumber(),
    username: TEST_USER,
  },
]

export { users }
