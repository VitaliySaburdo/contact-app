import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const RegisterLink = styled(NavLink)`
  font-family: 'Poppins';
  font-size: 16px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  width: 97px;
  height: 45px;
  border: 1px solid;
  border-color: rgba(30, 30, 30, 0.2);
  background: #ffffff;
  color: #3792de;
  border-radius: 30px;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: #ffffff;
    background: #3792de;
  }
   &.active {
    color: #ffffff;
    background: #3792de;
  }
`;

export const LogoLink = styled(NavLink)`
  font-family: 'Poppins';
  font-size: 16px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;
  width: 97px;
  height: 45px;
  border: 1px solid;
  border-color: rgba(30, 30, 30, 0.2);
  background: #ffffff;
  color: #3792de;
  border-radius: 30px;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: #ffffff;
    background: #3792de;
  }
   &.active {
    color: #ffffff;
    background: #3792de;
  }
`;
