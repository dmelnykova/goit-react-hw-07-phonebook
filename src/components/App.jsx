import { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterField } from './FilterField/Filter';
import { GlobalStyle } from './GlobalStyle';
import { fetchContacts } from '../redux/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterField />
      <ContactsList />
      <GlobalStyle />
      <Toaster />
    </>
  );
}