import { createReducer } from '@reduxjs/toolkit';

import { addContacts, deleteContacts } from './contacts-actions';

const contactsReducer = createReducer([], {
  [addContacts]: (state, { payload }) => {
    state.push(payload);
  },
  [deleteContacts]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

export default contactsReducer;
