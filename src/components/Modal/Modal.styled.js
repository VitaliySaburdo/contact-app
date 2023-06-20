import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.2);
  animation: ${zoomIn} 0.3s ease-in;
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  background-color: #ffffff;
  padding: 30px;

`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
`;

