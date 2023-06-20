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
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  background-color: #ffffff;
  padding: 30px;
  width: 100px;
  height: 100px;
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

// .modal__close-btn {
//   position: absolute;
//   top: 8px;
//   right: 8px;
//   display: flex;
//   width: 30px;
//   height: 30px;
//   justify-content: center;
//   align-items: center;
//   color: $pure-black;
//   background-color: $prime-white;
//   border: 1px solid $close-btn-border-color;
//   border-radius: 50%;
//   transition: color $time-cubic, outline-color $time-cubic;
//   cursor: pointer;
//   outline-color: transparent;

//   &:hover,
//   &:focus {
//     color: $active-color;
//     outline-color: $active-color;
//   }
// }

// .modal__close-icon {
//   width: 18px;
//   height: 18px;
//   fill: currentColor;
// }
