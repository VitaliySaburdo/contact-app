import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Roboto';
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
  border-color: ${props=>props.theme.colors.btnBorderColor};
  color: ${props=>props.theme.colors.primaryColor};
  border-radius: 5px;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: ${props=>props.theme.colors.clearWhite};
    background: ${props=>props.theme.colors.primaryColor};
  }
   &.active {
    color: ${props=>props.theme.colors.clearWhite};
    background: ${props=>props.theme.colors.primaryColor};
  }
`;