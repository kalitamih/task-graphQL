import bcrypt from 'bcrypt';
import faker from 'faker';

interface User {
  avatar: string;
  email: string;
  name: string;
  lastname: string;
  password: string;
  phone: string;
  job: string;
  username: string;
}

const users: User[] = [
  {
    avatar: faker.internet.avatar(),
    email: faker.internet.email(),
    job: faker.name.jobDescriptor(),
    lastname: faker.name.lastName(),
    name: faker.name.firstName(),
    password: '1991',
    phone: faker.phone.phoneNumber(),
    username: 'kalitamih',
  },
  {
    avatar: faker.internet.avatar(),
    email: faker.internet.email(),
    job: faker.name.jobDescriptor(),
    lastname: faker.name.lastName(),
    name: faker.name.firstName(),
    password: 'react',
    phone: faker.phone.phoneNumber(),
    username: 'react',
  },
  {
    avatar: faker.internet.avatar(),
    email: faker.internet.email(),
    job: faker.name.jobDescriptor(),
    lastname: faker.name.lastName(),
    name: faker.name.firstName(),
    password: 'admin',
    phone: faker.phone.phoneNumber(),
    username: 'admin',
  },
];

// for (let i = 0; i < 3; i++) {
//   const { password } = users[i];
//   bcrypt.hash(password, 10).then(hash => {
//     users[i].password = hash;
//   });
// }

export { users };
