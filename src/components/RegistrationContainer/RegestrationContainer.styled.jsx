import styled from 'styled-components';
import img from '../../images/Registration-photo.jpg';

export const Container = styled.div`
  display: none;
  @media screen and (${p => p.theme.media.md}) {
    display: block;
    position: relative;
    height: 400px;
    width: 630px;
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media screen and (${p => p.theme.media.lg}) {
      height: 680px;
      width: 730px;
    }
  }
`;

export const Title = styled.div`
  position: absolute;
  width: 350px;
  left: 3%;
  top: 28%;
  font-family: 'Poppins';
  font-weight: 400px;
  font-size: 16px;
  text-align: center;
  color: ${p => p.theme.colors.clearWhite};
  z-index: 100;
  @media screen and (${p => p.theme.media.lg}){
    font-size: 22px;
    left: 25%;
    top: 25%;
  }
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
