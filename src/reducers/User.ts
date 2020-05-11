import { UserReducerType, USER_SIGNIN, USER_SIGNUP } from '../types/User';
import { DefaultAction } from '../types/Redux';
import User from '../models/User';

const INITIAL_STATE: UserReducerType = {
  item: {} as User,
};

const UserReducer = () => (
  state = INITIAL_STATE,
  action: DefaultAction,
): UserReducerType => {
  const { data } = action;

  switch (action.type) {
    case USER_SIGNIN:
      return {
        ...state,
        item: data,
      };

    case USER_SIGNUP:
      return {
        ...state,
        item: data,
      };

    default:
      return state;
  }
};

export default UserReducer();
