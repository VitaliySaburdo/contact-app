import { Outlet } from 'react-router-dom';
import { AppBar } from '../Header/Header';
import { Suspense } from 'react';
import { Box } from './Layout.styled';

export const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
