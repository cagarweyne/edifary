import '@/styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Script from 'next/script';

const styles = {
  global: () => ({
    body: {
      fontFamily:
        '-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,Ubuntu,roboto,noto,segoe ui,arial,sans-serif;',
      lineHeight: '1.6',
      letterSpacing: 1.5,
      fontSize: '19px',
      color: 'black',
    },
  }),
};

const theme = extendTheme({
  styles,
  colors: {
    brand: {
      100: '#ff6c09',
    },
  },
  components: {
    Button: {
      // 3. We can add a new visual variant
      variants: {
        fss: {
          bg: '#ff6c09',
          // boxShadow: '0 0 2px 2px #efdfde',
          color: 'white',
          _hover: {
            bg: '#fa9755',
          },
        },

        navItem: {
          _hover: {
            bg: '#edf2f7',
            color: 'white',
          },
        },
        cagaros: {
          color: 'white',
          bg: 'pink.400',
          _hover: {
            bg: 'pink.300',
          },
        },
      },
    },
  },
});

function App({ Component, pageProps }: any) {
  return (
    <>
      <Script
        id="google-tag-manager"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MD22D8C');`,
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MD22D8C"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
