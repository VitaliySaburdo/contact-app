import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
  gap: 20px;
  @media screen and (${props => props.theme.media.md}) {
  flex-direction: row;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.mainFontSize};
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
  border-color: ${p => p.theme.colors.btnBorderColor};
  border-radius: 5px;
  color: ${p => p.theme.colors.primaryColor};

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: ${p => p.theme.colors.clearWhite};
    background: ${p => p.theme.colors.primaryColor};
  }
  &.active {
    color: ${p => p.theme.colors.clearWhite};
    background: ${p => p.theme.colors.primaryColor};
  }
`;
