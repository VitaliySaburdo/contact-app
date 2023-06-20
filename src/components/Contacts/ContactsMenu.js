import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { RenderContacts } from '../RenderContactsList/RenderContactsList';
import {ContactContainer,FormContainer} from './ContactsMenu.styled';
import { Loader } from 'components/Loader/Loader';

export const ContactsMenu = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <ContactContainer>
      <FormContainer>
        <ContactForm />
        <Filter />
      </FormContainer>
      {isLoading && !error && <Loader/>}
      <RenderContacts />
    </ContactContainer>
  );
};
