import { ContactReducerType } from './Contact';
import { UserReducerType } from './User';

export interface DefaultState {
  Contact: ContactReducerType;
  User: UserReducerType;
}

export interface DefaultAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}
