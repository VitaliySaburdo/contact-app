import PropTypes from 'prop-types';
import { Item, Button, List } from './RenderContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

export const RenderContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const normalizeFilter = filter.toLowerCase();
  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  const handleOnClick = () => {};

  return (
    <List>
      {visibleContact.map(contact => (
        <Item key={contact._id}>
          {contact.name}: {contact.number}
          <Button onClick={handleOnClick}>edit</Button>
          <Button onClick={() => dispatch(deleteContact(contact._id))}>
            delete
          </Button>
        </Item>
      ))}
    </List>
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
