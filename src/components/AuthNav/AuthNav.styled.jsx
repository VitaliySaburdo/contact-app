import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.mainFontSize};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  width: 80px;
  height: 35px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.btnBorderColor};
  border-radius: 5px;
  color: ${props => props.theme.colors.primaryColor};

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: ${props => props.theme.colors.clearWhite};
    background: ${props => props.theme.colors.primaryColor};
  }
  &.active {
    color: ${props => props.theme.colors.clearWhite};
    background: ${props => props.theme.colors.primaryColor};
  }
`;
