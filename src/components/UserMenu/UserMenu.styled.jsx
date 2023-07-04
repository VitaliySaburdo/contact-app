import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  @media screen and (${p => p.theme.media.md}) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media screen and (${p => p.theme.media.md}) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;
export const UserName = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: ${p => p.theme.colors.secondaryColor};
`;

export const Button = styled.button`
  font-family: ${p => p.theme.fonts.main};
  font-size: 16px;
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
  background-color: transparent;
  cursor: pointer;

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: ${p => p.theme.colors.clearWhite};
    background: ${p => p.theme.colors.primaryColor};
  }
`;
