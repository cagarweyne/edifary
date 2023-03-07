import {
  AspectRatio,
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  Heading,
} from '@chakra-ui/react';

export const Logo = () => (
  <svg
    height="40"
    viewBox="0 0 78 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" fill="#FF7A00"></path>
    <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" fill="#FF9736"></path>
    <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" fill="#FFBC7D"></path>
  </svg>
);

import { HStack, Icon, StackProps } from '@chakra-ui/react';
import { BsFillStarFill } from 'react-icons/bs';

export const Rating = (props: StackProps) => (
  <HStack spacing="1.5" {...props}>
    {Array.from({ length: 5 })
      .map((_, index) => index + 1)
      .map((index) => (
        <Icon
          key={index}
          as={BsFillStarFill}
          fontSize="xl"
          color="orange.500"
          _dark={{ color: 'blue.200' }}
        />
      ))}
  </HStack>
);

export const Testimonial = () => (
  <Box as="section" py={{ base: '16', md: '24' }} id="testimonials">
    <Stack spacing={{ base: '16', md: '24' }}>
      <Stack spacing="3" align="center" textAlign="center">
        <Heading size={{ base: 'sm', md: 'lg' }}>
          You're in good company
        </Heading>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: '12', md: '16' }}
      >
        <AspectRatio ratio={1} order={{ base: '2', md: '0' }}>
          <Image src="https://tinyurl.com/299apdk5" objectFit="cover" alt="" />
        </AspectRatio>
        <Stack spacing={{ base: '6', md: '8' }} justify="center">
          <Rating />
          <Text textStyle={{ base: 'lg', md: '2xl' }} fontWeight="medium">
            "Cagaros stands out because of its dual qualities of simplicity and
            effectiveness. Its user-friendly design allows beginners to get
            started without feeling intimidated or overwhelmed, while still
            providing all the necessary features to create and market
            professional-looking courses that are engaging and attractive.."
          </Text>
          <Stack
            spacing="5"
            direction="row"
            divider={<StackDivider />}
            align={{ base: 'flex-start', md: 'center' }}
          >
            <Stack
              spacing={{ base: '4', md: '5' }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Box>
                <Text fontWeight="semibold">David Smith</Text>
                <Text color="muted">Founder, Teacher Project.</Text>
              </Box>
            </Stack>
            <Logo />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  </Box>
);
