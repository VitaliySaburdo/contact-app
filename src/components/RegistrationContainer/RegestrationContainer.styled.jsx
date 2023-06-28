import styled from 'styled-components';
import img from '../../images/Registration-photo.jpg';

export const Container = styled.div`
  position: relative;
  height: 680px;
  width: 730px;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Title = styled.div`
  position: absolute;
  width: 350px;
  left: 25%;
  top: 25%;
  font-family: 'Poppins';
  font-weight: 400px;
  font-size: 22px;
  text-align: center;
  color: ${p => p.theme.colors.clearWhite};
  z-index: 100;
`;

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgba(47, 48, 58, 0.4),
    rgba(47, 48, 58, 0.4)
  );
`;
