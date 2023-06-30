import { LogoTitle, NavbarLink, StyledSpan } from './LogoLink.styled';
import phonebook from '../../images/phone-book.png';

export const LogoLink = () => {
  return (
    <NavbarLink to="/">
      <StyledSpan>
        <img src={phonebook} alt="phonebook" width={25} />
      </StyledSpan>
      <LogoTitle>Contact app</LogoTitle>
    </NavbarLink>
  );
};
