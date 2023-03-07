import {
  Container,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Text,
  Button,
} from '@chakra-ui/react';
import { Layout } from '../components/layout';
import { fetchFromAPI } from '../utils/lib';
import styled from '@emotion/styled';
import Router from 'next/router';
import { Formik } from 'formik';
import { useState } from 'react';

const FormErrorMessage = styled(Text)`
  color: red;
  font-size: 0.75rem;
`;

export default function Contact() {
  const [error, setError] = useState<null | string>(null);
  return (
    <Layout noFooter>
      <Formik
        enableReinitialize
        initialValues={{
          firstName: '',
          email: '',
          industry: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { success } = await fetchFromAPI('/api/contact', {
              body: values,
            });

            if (success) {
              setSubmitting(false);
              Router.push('/message-received');
            }
          } catch (error) {
            console.log(error);
            setError('Error!');
          }
        }}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
          return (
            <Container mt="12">
              <Heading textAlign={'center'} as="h1">
                Get Started
              </Heading>
              <form onSubmit={handleSubmit}>
                <FormControl mb="4">
                  <FormLabel htmlFor="large" variant="floating" size="lg">
                    Name
                  </FormLabel>
                  {errors.firstName ? (
                    <FormErrorMessage>First Name is required.</FormErrorMessage>
                  ) : null}
                  <Input
                    id="large"
                    size="lg"
                    placeholder=" "
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                  />
                </FormControl>

                <FormControl mb="4">
                  <FormLabel htmlFor="large" variant="floating" size="lg">
                    email
                  </FormLabel>
                  {errors.email ? (
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  ) : null}
                  <Input
                    id="large"
                    size="lg"
                    placeholder=" "
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </FormControl>

                <FormControl mb="4">
                  <FormLabel htmlFor="large" variant="floating" size="lg">
                    Your industry - e.g. fitness
                  </FormLabel>
                  <Input
                    id="large"
                    size="lg"
                    placeholder=" "
                    type="text"
                    name="industry"
                    onChange={handleChange}
                    value={values.industry}
                  />
                </FormControl>

                <Button
                  variant="fss"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting' : 'Submit'}
                </Button>
              </form>
              {error ? (
                <FormErrorMessage>An Error Occurred</FormErrorMessage>
              ) : null}
            </Container>
          );
        }}
      </Formik>
    </Layout>
  );
}
