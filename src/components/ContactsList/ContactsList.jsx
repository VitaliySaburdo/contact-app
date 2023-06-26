import PropTypes from 'prop-types';
import {
  Item,
  Button,
  List,
  ButtonWrapper,
  ListWrapper,
  Text,
} from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { putContact, fetchContacts } from '../../redux/contacts/operations';

export const ContactsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContactId, setModalContactId] = useState(null);
  const [nameContact, setNameContact] = useState(null);
  const [numberContact, setNumberContact] = useState(null);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const normalizeFilter = filter.toLowerCase();
  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  const sortedContacts = visibleContact.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const handleOpenModal = (id, name, number) => {
    setIsOpen(true);
    setModalContactId(id);
    setNameContact(name);
    setNumberContact(number);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleUpdateContact = async ({ name, number }) => {
    await dispatch(
      putContact({ contactId: modalContactId, contact: { name, number } })
    );
    handleCloseModal();
    dispatch(fetchContacts());
  };

  const buttonLabel = 'Update contact';

  return (
    <>
      <ListWrapper>
        <List>
          {sortedContacts.length === 0 ? (
            <Text>There is no contacts in your list</Text>
          ) : (
            sortedContacts.map(contact => (
              <Item key={contact._id}>
                {contact.name}: {contact.number}
                <ButtonWrapper>
                  <Button
                    onClick={() => {
                      handleOpenModal(
                        contact._id,
                        contact.name,
                        contact.number
                      );
                    }}
                    edit
                  >
                    edit
                  </Button>
                  <Button
                    onClick={() => dispatch(deleteContact(contact._id))}
                    delete
                  >
                    delete
                  </Button>
                </ButtonWrapper>
              </Item>
            ))
          )}
        </List>
        {isOpen && (
          <Modal onClick={handleCloseModal}>
            <ContactForm
              onSubmit={handleUpdateContact}
              buttonLabel={buttonLabel}
              name={nameContact}
              number={numberContact}
            />
          </Modal>
        )}
      </ListWrapper>
    </>
  );
};

ContactsList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
