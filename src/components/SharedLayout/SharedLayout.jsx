import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import { Footer } from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
