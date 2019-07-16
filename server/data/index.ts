import bcrypt from 'bcrypt';
import faker from 'faker';

interface Users {
  password: string;
  username: string;
}

const username: string = 'kalitamih';

const users: [Users] = [
  {
    password: '1991',
    username: 'kalitamih',
  },
];

const [user] = users;

const { password } = user;

bcrypt.hash(password, 10).then(hash => {
  users[0].password = hash;
});

export { users };
