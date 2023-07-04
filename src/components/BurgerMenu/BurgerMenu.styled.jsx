import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Burger = styled.div`
  position: relative;
  z-index: 1000;
  @media screen and (${props => props.theme.media.md}) {
    display: none;
  }
`;

// backdrop
export const Box = styled.div`
  position: fixed;
  z-index: 500;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  background-color: ${props => props.theme.colors.clearWhite};

  @media screen and (${props => props.theme.media.md}) {
    display: none;
  }
`;

export const BoxUser = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 82px;
  margin-bottom: 40px;
  @media screen and (${props => props.theme.media.md}) {
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
