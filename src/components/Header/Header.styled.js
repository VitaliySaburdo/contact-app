import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 25px;
  display: flex;
  color: #455a64;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    text-shadow: 2px 2px 3px rgba(30, 30, 30, 0.2);
  }
`;
