import PropTypes from 'prop-types';
import { Item, Button, List } from './RenderContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const RenderContacts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const normalizeFilter = filter.toLowerCase();
  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

    const handleOpenModal = () => {
    setIsOpen(true);
  };

    const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
    <List>
      {visibleContact.map(contact => (
        <Item key={contact._id}>
          {contact.name}: {contact.number}
          <Button onClick={handleOpenModal}>edit</Button>
          <Button onClick={() => dispatch(deleteContact(contact._id))}>
            delete
          </Button>
        </Item>
      ))}
      </List>
      {isOpen&&<Modal onClick={handleCloseModal}>Hello</Modal>}
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
