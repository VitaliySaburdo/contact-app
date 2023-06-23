import { NavbarLink, NavBar } from './Navigation.styled';
import phonebook from '../../images/phone-book.png';

export const Navigation = () => {
  return (
    <NavBar>
      <NavbarLink to="/">
        <span>
          <img src={phonebook} alt="phonebook" width={25} />
        </span>
        <span>Contact app</span>
      </NavbarLink>
    </NavBar>
  );
};
