import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react';
import { BsFillMoonFill, BsStars } from 'react-icons/bs';
import { FaAccessibleIcon, FaExpandAlt, FaPaintBrush } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: any;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={5}
        h={5}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={400}>{text}</Text>
    </Stack>
  );
};

const appFeatures = [
  {
    text: 'Unlimited Courses',
  },
  {
    text: 'Unlimited Students',
  },
  {
    text: 'Unlimited administrators',
  },
  {
    text: '0% transaction fee',
  },
  {
    text: 'Email support',
  },
  {
    text: '100% ownership of content',
  },
];

export const features = [
  {
    name: '210+ Components',
    description:
      'Chakra UI Pro has 210+ componentsto help you develop your project faster.',
    icon: BsStars,
  },
  {
    name: 'Production Ready',
    description:
      'Effortlessly create your next production-ready experience with Chakra UI Pro components.',
    icon: IoRocketSharp,
  },
  {
    name: 'Light & Dark',
    description:
      'All components support a light and a dark color mode out of the box.',
    icon: BsFillMoonFill,
  },
  {
    name: 'Themeable',
    description:
      "Your style. Your blue. Customize the components as you need them. It's that simple.",
    icon: FaPaintBrush,
  },
  {
    name: 'Fully Responsive',
    description:
      'Responsive components that look great on mobile, tablet and desktop.',
    icon: FaExpandAlt,
  },
  {
    name: 'Accessible',
    description:
      "Accessibility first. That's why we pay attention to accessibility right from the start.",
    icon: FaAccessibleIcon,
  },
];

export const Features = () => (
  <Box as="section" bg="bg-surface" id="features">
    <Container py={{ base: '12', md: '12' }}>
      <Stack spacing={{ base: '12', md: '16' }}>
        <Stack
          spacing={{ base: '4', md: '5' }}
          align="center"
          textAlign="center"
        >
          <Stack spacing="3">
            <Heading size={{ base: 'sm', md: 'lg' }}>Features</Heading>
          </Stack>
          <Text color="muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
            The best course builder platform available for the best price!
          </Text>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 2 }}
          columnGap={8}
          rowGap={{ base: 10, md: 16 }}
        >
          {appFeatures.map((feature) => {
            return (
              <Feature
                key={feature.text}
                icon={<FaCheck color="#f48356" />}
                iconBg="inherit"
                text={feature.text}
              />
            );
          })}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
);
