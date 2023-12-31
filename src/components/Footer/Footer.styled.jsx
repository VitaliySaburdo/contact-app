import styled from 'styled-components';

export const FooterStyled = styled.footer``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px 20px 0px;
  height: 100%;

  @media screen and(${p=>p.theme.media.md}){
    padding: 10px 20px 20px 0px;
  }
`;

export const Link = styled.a`
  font-family: ${p => p.theme.fonts.main};
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.linkFontSize};
  line-height: 18px;

  color: ${p => p.theme.colors.primaryColor};
  text-decoration: none;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${p => p.theme.colors.secondaryColor};
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 0;
  gap: 10px;
  border: 1px solid;
  border-color: ${p => p.theme.colors.btnBorderColor};
  fill: ${p => p.theme.colors.primaryColor};

  transition-property: background-color, fill;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.primaryColor};
    fill: ${p => p.theme.colors.clearWhite};
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledSVG = styled.svg`
  fill: inherit;
`;
