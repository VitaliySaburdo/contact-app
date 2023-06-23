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
  font-family: 'Poppins';
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  border: none;
  gap: 10px;
  width: 97px;
  height: 45px;
  background: #3792de;
  border-radius: 30px;
  color: #ffffff;
  cursor: pointer;
`;
