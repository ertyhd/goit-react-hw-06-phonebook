import { nanoid } from 'nanoid';

import { ADD_CONTACTS, DELETE_CONTACTS } from './contacts-types';

export const addContacts = payload => {
  return { type: ADD_CONTACTS, payload: { id: nanoid(), ...payload } };
};

export const deleteContacts = payload => {
  return {
    type: DELETE_CONTACTS,
    payload,
  };
};
