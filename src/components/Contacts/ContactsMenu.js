import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { RenderContacts } from '../RenderContactsList/RenderContactsList';
import {ContactContainer,FormContainer} from './ContactsMenu.styled';
import { Loader } from 'components/Loader/Loader';
import { addContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';


export const ContactsMenu = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

const handleAddContact = ({ name, number }) => {
  dispatch(addContact({ name, number }));
  };
  
 const buttonLabel = 'Add contact';

  return (
    <ContactContainer>
      <FormContainer>
        <ContactForm onSubmit={handleAddContact} buttonLabel={buttonLabel}/>
        <Filter />
      </FormContainer>
      {isLoading && !error && <Loader/>}
      <RenderContacts />
    </ContactContainer>
  );
};
