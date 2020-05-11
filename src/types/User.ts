import User from '../models/User';

export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNIN = 'USER_SIGNIN';

export interface UserReducerType {
  item: User;
}
