import { DefaultAction } from '../types/Redux';
import API from '../services/api';
import User from '../models/User';
import { USER_SIGNUP, USER_SIGNIN } from '../types/User';

interface Actions {
  signup(user: User): Promise<DefaultAction>;
  signin(user: Omit<User, 'userName'>): Promise<DefaultAction>;
}

const UserAction = (): Actions => {
  return {
    signup: async (user: User): Promise<DefaultAction> => {
      const { data } = await API.post('user', user);

      return {
        type: USER_SIGNUP,
        data,
      };
    },
    signin: async (user: Omit<User, 'name'>): Promise<DefaultAction> => {
      const { data } = await API.get('user');

      const userExists = data.find(
        (guy: User) =>
          guy.email === user.email && guy.password === user.password,
      );

      return {
        type: USER_SIGNIN,
        data: userExists,
      };
    },
  };
};

export default UserAction();
