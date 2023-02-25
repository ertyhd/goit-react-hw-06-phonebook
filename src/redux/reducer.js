import { ADD_CONTACTS, DELETE_CONTACTS } from './types';

const initialState = {
  contacts: [],
  filter: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACTS:
      const newContacts = [...state.contacts, action.payload];
      return { ...state, contacts: newContacts };
    case DELETE_CONTACTS:
      const result = state.contacts.filter(item => item.id !== action.payload);
      return { ...state, contacts: result };
    default:
      return state;
  }
};

export default reducer;

// 1:48
