import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavbarLink = styled(NavLink)`
  display: block;
  margin-top: 25px;
  margin-bottom: 25px;
  text-decoration: none;
  font-family: ${p => p.theme.fonts.second};
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
