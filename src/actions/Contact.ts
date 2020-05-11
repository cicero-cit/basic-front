import {
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  EDIT_IN_LIST,
  GET_ALL_FROM_LIST,
} from '../types/Contact';
import Contact from '../models/Contact';
import { DefaultAction } from '../types/Redux';
import API from '../services/api';

interface Actions {
  add(contact: Omit<Contact, 'id'>): Promise<DefaultAction>;
  delete(id: string): Promise<DefaultAction>;
  edit(contact: Contact): Promise<DefaultAction>;
  getAll(): Promise<DefaultAction>;
}

const ContactAction = (): Actions => {
  return {
    add: async (contact: Omit<Contact, 'id'>): Promise<DefaultAction> => {
      const { data } = await API.post('contacts', contact);

      return {
        type: ADD_TO_LIST,
        data,
      };
    },
    delete: async (id: string): Promise<DefaultAction> => {
      await API.delete(`contacts/${id}`);

      return {
        type: REMOVE_FROM_LIST,
        data: { id },
      };
    },
    edit: async (contact: Contact): Promise<DefaultAction> => {
      const { data } = await API.put(`contacts/${contact.id}`, contact);

      return {
        type: EDIT_IN_LIST,
        data,
      };
    },
    getAll: async (): Promise<DefaultAction> => {
      const { data } = await API.get('contacts');

      return {
        type: GET_ALL_FROM_LIST,
        data,
      };
    },
  };
};

export default ContactAction();
