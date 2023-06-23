import { Outlet } from 'react-router-dom';
import { AppBar } from '../Header/Header';
import { Suspense } from 'react';
import { Container } from '../Container/Container';

export const Layout = () => {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
