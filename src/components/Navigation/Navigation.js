import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavbarLink, NavBar } from './Navigation.styled';
import phonebook from '../../images/phone-book.png';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavBar>
      <NavbarLink to="/">
        <span>
          <img src={phonebook} alt="phonebook" width={25} />
        </span>
        <span>Contact Manager</span>
      </NavbarLink>
      {isLoggedIn && <NavbarLink to="/contacts">Contacts</NavbarLink>}
    </NavBar>
  );
};
