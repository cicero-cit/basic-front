import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

import Contact from './reducers/Contact';
import User from './reducers/User';
import { DefaultState } from './types/Redux';

export const rootReducer = combineReducers({
  Contact,
  User,
});

export const useTypedSelector: TypedUseSelectorHook<DefaultState> = useSelector;
