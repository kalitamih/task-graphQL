import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { users } from '../data';

import { KEY } from '../constants';

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

const createToken = (username: string, secret: string) => jwt.sign(username, secret);

const resolvers = {
  Query: {
    signinUser: async (
      root: any,
      { username, password }: { username: string; password: string }
    ) => {
      const [user] = users.filter((item: Users) => item.username === username);
      if (!user) {
        throw new Error('User not found');
      }
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        throw new Error('Invalid password');
      }
      return { token: createToken(user.username, KEY) };
    },
    userInfo: async (root: any, args: any, { currentUser }: { currentUser: string | object }) => {
      if (currentUser) {
        const [user] = users.filter((item: Users) => item.username === currentUser);
        return user;
      }
      return null;
    },
  },
};

export default resolvers;
