import {
  Box,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
  StackProps,
} from '@chakra-ui/react';

interface StatProps extends StackProps {
  label: string;
  value: string;
}

export const Stat = (props: StatProps) => {
  const { label, value, ...stackProps } = props;
  return (
    <Stack spacing="3" textAlign="center" {...stackProps}>
      <Heading size={{ base: 'lg', md: 'xl' }} color="accent">
        {value}
      </Heading>
      <Text fontSize="lg" fontWeight="medium" color="muted">
        {label}
      </Text>
    </Stack>
  );
};

export const stats = [
  {
    value: '10+',
    label: 'Course Themes',
  },
  {
    value: '90%',
    label: 'Cost Savings',
  },
  {
    value: '10000+',
    label: 'Users',
  },
];

export const Stats = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box bg="bg-surface">
      <Container py={{ base: '16', md: '16' }}>
        <Stack
          spacing={{ base: '12', md: '16' }}
          textAlign="center"
          align="center"
        >
          <Stack spacing={{ base: '4', md: '5' }}>
            <Heading size={{ base: 'sm', md: 'lg' }}>Why Cagaros?</Heading>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            maxW="3xl"
            width="full"
            spacing={{ base: '8', md: '4' }}
            {...(!isMobile ? { divider: <StackDivider /> } : {})}
          >
            {stats.map((stat, id) => (
              <Stat key={id} flex="1" {...stat} />
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
