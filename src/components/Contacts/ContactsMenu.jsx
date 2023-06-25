import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectContacts,
} from 'redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactsList } from '../ContactsList/ContactsList';
import { ContactContainer, FormContainer } from './ContactsMenu.styled';




export const ContactsMenu = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleAddContact = ({ name, number }) => {
    const isNumberInContact = contacts.find(
      contact =>
        contact.number.toLocaleLowerCase() === number.toLocaleLowerCase()
    );

    if (isNumberInContact) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }
  };

  const buttonLabel = 'Add contact';

  return (
    <ContactContainer>
      <FormContainer>
        <ContactForm onSubmit={handleAddContact} buttonLabel={buttonLabel} />
        <Filter />
      </FormContainer>
      {isLoading && !error && <Loader />}
      <ContactsList />
    </ContactContainer>
  );
};
