import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Notiflix from 'notiflix';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { addContacts, deleteContacts } from 'redux/actions';

import style from './contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(store => store.contacts);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const isDublicate = (name, number) => {
    const normName = name.toLowerCase();
    const normNumber = number.toLowerCase();
    const findContact = contacts.find(({ name, number }) => {
      return (
        name.toLowerCase() === normName && number.toLowerCase() === normNumber
      );
    });
    return Boolean(findContact);
  };

  const onAddContact = ({ name, number }) => {
    if (isDublicate(name, number)) {
      Notiflix.Notify.failure(
        `The contact ${name} whith ${number} phone is already exist`
      );
      return false;
    }
    const action = addContacts({ name, number });
    dispatch(action);
  };

  const onDeleteContact = id => {
    const action = deleteContacts(id);
    dispatch(action);
  };

  const hendleFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizateFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizateFilter) ||
        number.toLowerCase().includes(normalizateFilter)
      );
    });
    return result;
  };

  const filteredContacts = getFilteredContacts();
  console.log(filteredContacts);
  const isContacts = Boolean(filteredContacts.length);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <div className={style.block}>
        <Filter handleChange={hendleFilter} />
        {isContacts && (
          <ContactList
            deleteContact={onDeleteContact}
            contacts={filteredContacts}
          />
        )}
        {!isContacts && <p>No contacts in list</p>}
      </div>
    </>
  );
};

export default Contacts;
