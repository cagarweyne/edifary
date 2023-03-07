import { Box, Button, Heading, Img, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Hero = () => (
  <Box as="section" bg="bg-surface" mt="16">
    <Box position="relative" height={{ lg: '720px' }}>
      <>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '16' }}
          align={{ lg: 'center' }}
          height="full"
        >
          <Stack spacing={{ base: '8', md: '12' }}>
            <Stack spacing="4">
              <Stack
                spacing={{ base: '4', md: '6' }}
                maxW={{ md: 'xl', lg: 'md', xl: 'xl' }}
              >
                <Heading size={{ base: 'md', md: 'xl' }}>
                  Turn your specialized knowledge into a profitable online
                  course
                </Heading>
                <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted">
                  Develop, advertise, and distribute your own digital courses
                  with Cagaros.
                </Text>
              </Stack>
            </Stack>
            <Stack direction={{ base: 'column', md: 'row' }} spacing="3">
              <Link href="/get-started">
                <Button variant="fss" className="get-started">
                  Start free trial now
                </Button>
              </Link>
            </Stack>
          </Stack>

          <Box
            pos={{ lg: 'absolute' }}
            right="0"
            bottom="0"
            w={{ base: 'full', lg: '50%' }}
            height={{ base: '96', lg: 'full' }}
            sx={{
              clipPath: { lg: 'polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)' },
            }}
          >
            <Img
              boxSize="full"
              objectFit="cover"
              src="https://tinyurl.com/yeyjvptc"
              alt="Lady at work"
            />
          </Box>
        </Stack>
      </>
    </Box>
  </Box>
);
