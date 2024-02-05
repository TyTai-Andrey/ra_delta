import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { Footer } from '@/components/Footer';

export const Layout = ({ children, withSearchHeader }) => {
  return (
    <>
      <Header withSearch={withSearchHeader} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
