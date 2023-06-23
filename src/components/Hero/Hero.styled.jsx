import styled from 'styled-components';
import background from '../../images/Hero.jpg';
import { Link } from 'react-router-dom';

export const HeroLink = styled(Link)`
  text-decoration: none;
`;
export const Container = styled.div`
  height: 700px;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${background});
  margin-left: auto;
  margin-right: auto;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 400px;
  font-size: 35px;
  text-align: center;
  color: #ffffff;
  padding-top: 180px;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  font-family: 'Poppins';
  font-weight: 400px;
  font-size: 35px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 180px;
  height: 44px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  background-color: #3792de;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #3ca0f3;
  }
`;
