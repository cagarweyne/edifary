import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  BoxProps,
  Button,
  Circle,
  HStack,
  Icon,
  List,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';

const features = [
  'Unlimited Courses',
  'Unlimited Students',
  'Unlimited administrators',
  '0% transaction fee',
  'Email support',
  '100% ownership of content',
  'Drag and drop course builder',
  'Full customizable website',
  'Easy to use website themes',
  'Course quizzes and surveys',
  'Custom domain',
  'Remove Cagaros branding',
  'Full API access',
];

export const products = [
  {
    name: 'Monthly',
    price: '$47',
    description: 'Pay as you go',
    features: [...features],
    isPopular: true,
  },

  {
    name: 'Yearly',
    price: '$470',
    description: 'Save 17%',
    features: [...features],
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;

interface Props extends BoxProps {
  product: Product;
}

import { Center, CenterProps } from '@chakra-ui/react';

export const PricingCardBadge = (props: CenterProps) => (
  <Center
    bg="orange.400"
    color="white"
    position="absolute"
    right={-10}
    top={5}
    transform="rotate(45deg)"
    py="2"
    px="12"
    {...props}
  />
);

export const PricingCard = (props: Props) => {
  const { product } = props;
  return (
    <Box
      bg="bg-surface"
      borderRadius="2xl"
      boxShadow="lg"
      px={{ base: '6', md: '8' }}
      py="8"
      position="relative"
      overflow="hidden"
    >
      {product.isPopular && (
        <PricingCardBadge>
          <Text fontWeight="medium">Popular</Text>
        </PricingCardBadge>
      )}
      <Stack spacing="8" textAlign="center">
        <Stack spacing="5" align="center">
          <Stack spacing="4">
            <Heading size={{ base: 'md', md: 'lg' }}>{product.price}</Heading>
            <Stack spacing="1">
              <Text fontSize="xl" fontWeight="semibold">
                {product.name}
              </Text>
              <Text color="muted">{product.description}</Text>
            </Stack>
          </Stack>
        </Stack>
        <List as="ul" spacing="4">
          {product.features.map((feature) => (
            <HStack key={feature} as="li" spacing="3">
              <Circle size="6">
                <Icon as={FiCheck} color="orange.300" />
              </Circle>
              <Text color="muted">{feature}</Text>
            </HStack>
          ))}
        </List>
        <Link href="/get-started">
          <Button variant="fss" size="lg" className="get-started">
            Start 30 day free trial now!
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export const Pricing = () => (
  <Box as="section" id="pricing">
    <Container maxWidth={'1200px'} py={{ base: '12', md: '12' }}>
      <Stack spacing={{ base: '16', md: '24' }}>
        <Stack spacing="3" align="center" textAlign="center">
          <Heading size={{ base: 'sm', md: 'lg' }}>Pricing</Heading>
        </Stack>
        <Stack
          spacing={{ base: '12', md: '16' }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            columnGap="8"
            rowGap="6"
            flex="1"
          >
            {products.map((product, id) => (
              <PricingCard key={id} product={product} />
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
