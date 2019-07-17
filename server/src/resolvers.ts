import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { users } from '../data';

interface Users {
  password: string;
  username: string;
}

const KEY: string = 'Jw2pK7JS';

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
    userInfo: () => {
      return { username: '1221231' };
    },
  },
};

export default resolvers;
