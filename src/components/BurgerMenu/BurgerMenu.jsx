import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Spin as Hamburger } from 'hamburger-react';
import { Burger, Box, NavbarLink } from './BurgerMenu.styled';

import { AuthNav } from '../AuthNav/AuthNav';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const BurgerMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handler = e => {
      if (menuRef.current.contains(e.target)) {
        setIsOpen(true);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  return (
    <>
      <Burger tyle={{ zIndex: 1001 }}>
        <Hamburger
          isOpen={isOpen}
          onClick={handleOpen}
          toggled={isOpen}
          toggle={setIsOpen}
          easing="ease-in"
          rounded="true"
          label="Show menu"
          size={20}
          color="#455a64"
          distance="md"
          duration={0.3}
        />
      </Burger>

      <Box isOpen={isOpen} onClick={handleClose} ref={menuRef}>
        {isLoggedIn ? (
          <NavbarLink to="/contacts">
            <UserMenu isOpen={isOpen} />
          </NavbarLink>
        ) : (
          <AuthNav />
        )}
      </Box>
    </>
  );
};

BurgerMenu.protoTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  toggled: PropTypes.bool,
  toggle: PropTypes.bool,
  menuRef: PropTypes.element,
}.isRequired;
