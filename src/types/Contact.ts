import Contact from '../models/Contact';

export const ADD_TO_LIST = 'ADD_TO_LIST';
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST';
export const EDIT_IN_LIST = 'EDIT_IN_LIST';
export const GET_ALL_FROM_LIST = 'GET_ALL_FROM_LIST';

export interface ContactReducerType {
  list: Contact[];
}
