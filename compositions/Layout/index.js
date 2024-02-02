import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { Footer } from '@/components/Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
