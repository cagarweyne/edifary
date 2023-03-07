import { Layout } from '../components/layout';
import { Container, Heading, Text } from '@chakra-ui/react';

export default function ThankYou() {
  return (
    <Layout noFooter>
      <Container>
        <Heading textAlign={'center'} as="h1" mt="12">
          Thank You
        </Heading>
        <Text mt="8" mb="4">
          Thank you for contacting us, someone will be in touch with you very
          soon!
        </Text>
      </Container>
    </Layout>
  );
}
