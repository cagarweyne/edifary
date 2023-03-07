import { Navbar } from './navbar';
import { Footer } from './footer';
import { Container } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
  noFooter?: boolean;
  noHeader?: boolean;
}

export const Layout: React.FC<Props> = ({ children, noHeader, noFooter }) => {
  return (
    <Container maxWidth="1200px">
      {!noHeader && <Navbar />}
      {children}
      {!noFooter && <Footer />}
    </Container>
  );
};
