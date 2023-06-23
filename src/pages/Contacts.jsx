import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsMenu } from 'components/Contacts/ContactsMenu';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <ContactsMenu />
        </Container>
      </Section>
    </>
  );
}
