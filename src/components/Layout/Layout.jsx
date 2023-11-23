import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Header } from 'components/Header/Header';
import { ContentContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Toaster position="top-center" />
    </>
  );
};
