import { NavbarLink, NavBar, StyledSpan } from './Navigation.styled';
import phonebook from '../../images/phone-book.png';

export const Navigation = () => {
  return (
    <NavBar>
      <NavbarLink to="/">
        <StyledSpan>
          <img src={phonebook} alt="phonebook" width={25} />
        </StyledSpan>
        <span>Contact app</span>
      </NavbarLink>
    </NavBar>
  );
};
