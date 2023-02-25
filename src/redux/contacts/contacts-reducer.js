import { ADD_CONTACTS, DELETE_CONTACTS } from './contacts-types';

const initialState = [];
const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACTS:
      return [...state, payload];
    case DELETE_CONTACTS:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};

export default contactsReducer;
