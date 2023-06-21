import PropTypes from 'prop-types';
import { Item, Button, List, ButtonWrapper } from './RenderContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const RenderContacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContactId, setModalContactId] = useState(null);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const normalizeFilter = filter.toLowerCase();
  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  const handleOpenModal = id => {
    setIsOpen(true);
    setModalContactId(id);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleUpdateContact = ({ name, number }) => {
    console.log(name, number, modalContactId);
  };

  const buttonLabel = 'Update contact';

  return (
    <>
      <List>
        {visibleContact.map(contact => (
          <Item key={contact._id}>
            {contact.name}: {contact.number}
            <ButtonWrapper>
              <Button
                onClick={() => {
                  handleOpenModal(contact._id);
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
        ))}
      </List>
      {isOpen && (
        <Modal onClick={handleCloseModal}>
          <ContactForm
            onSubmit={handleUpdateContact}
            buttonLabel={buttonLabel}
          />
        </Modal>
      )}
    </>
  );
};

RenderContacts.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
