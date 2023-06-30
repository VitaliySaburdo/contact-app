import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

export const LogoTitle = styled.h2`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fonts.second};
  font-style: italic;
  font-weight: 700;
  font-size: ${p => p.theme.fontSizes.linkFontSize};
  color: ${p => p.theme.colors.secondaryColor};
  text-align: center;
  @media screen and (${props => props.theme.media.md}) {
    font-size: ${p => p.theme.fontSizes.mainFontSize};
  }
  @media screen and (${props => props.theme.media.lg}) {
    font-size: ${p => p.theme.fontSizes.menuTitleSize};
  }
`;

export const NavbarLink = styled(NavLink)`
  display: flex;
  margin-top: 25px;
  margin-bottom: 25px;
  text-decoration: none;

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    text-shadow: 2px 2px 3px rgba(30, 30, 30, 0.2);
  }
`;
