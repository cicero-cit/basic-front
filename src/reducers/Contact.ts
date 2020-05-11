import {
  ADD_TO_LIST,
  GET_ALL_FROM_LIST,
  EDIT_IN_LIST,
  REMOVE_FROM_LIST,
  ContactReducerType,
} from '../types/Contact';
import { DefaultAction } from '../types/Redux';

const INITIAL_STATE: ContactReducerType = {
  list: [],
};

const ContactReducer = () => (
  state = INITIAL_STATE,
  action: DefaultAction,
): ContactReducerType => {
  const { data } = action;

  switch (action.type) {
    case ADD_TO_LIST:
      state.list.push(data);
      return {
        ...state,
      };

    case REMOVE_FROM_LIST: {
      const list = state.list.filter(item => item.id !== data.id);

      return {
        ...state,
        list,
      };
    }

    case EDIT_IN_LIST: {
      const list = state.list.filter(item => item.id !== data.id);
      list.push(data);
      return {
        ...state,
        list,
      };
    }

    case GET_ALL_FROM_LIST:
      return {
        ...state,
        list: data,
      };

    default:
      return state;
  }
};

export default ContactReducer();
