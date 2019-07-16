import bcrypt from 'bcrypt';
import faker from 'faker';

interface Users {
  encryptedPassword: string;
  username: string;
}

const username: string = faker.internet.userName();

const password: string = faker.internet.password();

let encryptedPassword: string = '';

bcrypt.hash(password, 10).then(hash => {
  encryptedPassword = hash;
});

const users: [Users] = [
  {
    encryptedPassword,
    username,
  },
];

export { password, users };
