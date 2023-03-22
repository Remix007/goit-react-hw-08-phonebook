import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const handleFormSubmit = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
    };
    dispatch(addContact(contact));
    resetForm();
  };
  const handleChange = event => {
    if (event.target.name === 'name') setName(() => event.target.value);
    if (event.target.name === 'number') setNumber(() => event.target.value);
  };
  const resetForm = () => {
    setName(() => {
      return '';
    });
    setNumber(() => {
      return '';
    });
  };

  

export default ContactsForm;
