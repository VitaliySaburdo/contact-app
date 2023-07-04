import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media screen and (${p => p.theme.media.md}) {
    display: block;
    position: relative;
    height: 400px;
    width: 630px;
    background-image: linear-gradient(324.93deg, #007aff 0.74%, #0f70da 100%);
  }

  @media screen and (${p => p.theme.media.lg}) {
    height: 680px;
    width: 730px;
  }
`;

export const Title = styled.div`
  @media screen and (${p => p.theme.media.md}) {
    position: absolute;
    width: 350px;
    left: 3%;
    top: 5%;
    font-family: ${p => p.theme.fonts.second};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: 16px;
    text-align: center;
    color: ${p => p.theme.colors.clearWhite};
  }

  @media screen and (${p => p.theme.media.lg}) {
    left: 25%;
  }
`;

export const Circus = styled.div`
  @media screen and (${p => p.theme.media.md}) {
    position: absolute;
    left: 15%;
    top: 20%;
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background-image: linear-gradient(324.93deg, #0f70da 0.74%, #007aff 100%);
  }

  @media screen and (${p => p.theme.media.lg}) {
    left: 19%;
    width: 420px;
    height: 420px;
  }
`;

export const Img = styled.img`
  position: absolute;
  max-width: 70%;
  @media screen and (${p => p.theme.media.lg}) {
    max-width: 50%;
  }
`;
