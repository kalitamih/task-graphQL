import bcrypt from 'bcrypt';
import faker from 'faker';

interface Users {
  avatar: string;
  email: string;
  name: string;
  lastname: string;
  password: string;
  phone: string;
  job: string;
  username: string;
}

const users: [Users] = [
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
];

const [user] = users;

const { password } = user;

bcrypt.hash(password, 10).then(hash => {
  users[0].password = hash;
});

export { users };
