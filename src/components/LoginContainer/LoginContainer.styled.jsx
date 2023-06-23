import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 680px;
  width: 730px;
  background-image: linear-gradient(324.93deg, #007aff 0.74%, #0f70da 100%);
`;

export const Title = styled.div`
  position: absolute;
  width: 350px;
  left: 20%;
  top: 8%;
  font-family: 'Poppins';
  font-weight: 400px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

export const Circus = styled.div`
  position: absolute;
  left: 78px;
  top: 100px;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background-image: linear-gradient(324.93deg, #0f70da 0.74%, #007aff 100%);
`;

export const Img = styled.img`
  position: absolute;
`;
