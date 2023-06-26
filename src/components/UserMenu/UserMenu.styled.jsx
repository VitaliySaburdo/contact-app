import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
export const UserName = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #455a64;
`;

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
  border-color: ${props => props.theme.colors.btnBorderColor};
  border-radius: 5px;
  color: ${props => props.theme.colors.primaryColor};
  background-color: transparent;
  cursor: pointer;

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: ${props => props.theme.colors.clearWhite};
    background: ${props => props.theme.colors.primaryColor};
  }
`;
