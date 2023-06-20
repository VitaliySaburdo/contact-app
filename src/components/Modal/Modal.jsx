import { createPortal } from 'react-dom';
import { Overlay, ModalBody, CloseBtn } from './Modal.styled';
import { useEffect } from 'react';
import icons from '../../images/icons.svg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClick, children }) => {
  useEffect(() => {
    const handleEscDown = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleEscDown);
    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onClick]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  const handleCloseClick = () => {
    onClick();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalBody>
        <CloseBtn onClick={handleCloseClick}>
          <svg width={17} height={17}>
            <use href={icons + '#cross'}></use>
          </svg>
        </CloseBtn>
        {children}
      </ModalBody>
    </Overlay>,
    modalRoot
  );
};
