import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Header } from 'components/Header/Header';
import { ContentContainer } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Header />
      <ContentContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ContentContainer>
      <Toaster position="top-center" />
    </>
  );
};
