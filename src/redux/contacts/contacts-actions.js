import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContacts = createAction('contacts/add', data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
});
export const deleteContacts = createAction('contacts/delete');

// import { ADD_CONTACTS, DELETE_CONTACTS } from './contacts-types';

// export const addContacts = payload => {
//   return { type: ADD_CONTACTS, payload: { id: nanoid(), ...payload } };
// };

// export const deleteContacts = payload => {
//   return {
//     type: DELETE_CONTACTS,
//     payload,
//   };
// };
