import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import { Footer } from 'components/Footer/Footer';
import { StyledMain } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </StyledMain>
      <Footer />
    </>
  );
};
