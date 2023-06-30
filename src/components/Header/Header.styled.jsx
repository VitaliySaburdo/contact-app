import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header``;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthNavWrapper = styled.div`
  display: none;
  @media screen and (min-width: 480px) {
    display: block;
  }
`;
export const MobileNavWrapper = styled.div`
  display: block;
  @media screen and (min-width: 480px) {
    display: none;
  }
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 25px;
  display: flex;
  color: ${p => p.theme.colors.secondaryColor};
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    text-shadow: 2px 2px 3px rgba(30, 30, 30, 0.2);
  }
`;
