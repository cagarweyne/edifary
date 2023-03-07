import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

export function Footer() {
  return (
    <Box color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={6}>
          <Link href={'#features'}>Features</Link>
          <Link href={'#pricing'}>Pricing</Link>
          <Link href={'#testimonials'}>Testimonials</Link>
          <Link href={'#faq'}>FAQs</Link>
        </Stack>
        <Text>© 2023 Cagaros. All rights reserved</Text>
      </Container>
    </Box>
  );
}
