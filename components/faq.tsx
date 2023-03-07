import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel,
  Container,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';

export const FAQ = () => {
  return (
    <Container maxWidth="768px" id="faq">
      <Stack spacing={{ base: '16', md: '24' }}>
        <Stack spacing="3" align="center" textAlign="center">
          <Heading size={{ base: 'sm', md: 'lg' }}>FAQs</Heading>
        </Stack>
      </Stack>

      <Accordion allowToggle mt="8">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize="1.5rem">
                How do I get started with Cagaros?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            To get started with Cagaros you simply sign up for an account, you
            get 30 days absolutely free on us!
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize="1.5rem">
                Do you offer video hosting?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            We don&apos;t actually host your videos and this done for two
            reasons.
            <Text m="2">1. Because we can offer Cagaros at a low price.</Text>
            <Text m="2">
              2. Video hosting is not our business and we prefer to leave this
              to the experts such as YouTube, Vimeo, Wistia etc.
            </Text>
            <Text m="2">
              You can simply integrate your video hosting account with Cagaros -
              this means that you can upload your videos directly from within
              Cagaros dashboard.
            </Text>
            <Text>
              Without having to go and get an embed code. We currently support
              Youtube, Vimeo and Wistia and we are constantly adding more
              platforms.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize="1.5rem">
                Is there a limit to the number of courses I can create?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            No! There is no limit to the number of courses and number of
            students that you can create with Cagaros.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontSize="1.5rem">
                How do I accept payments?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Cagaros integrates with Stripe and Paypal. This means that you can
            connect your Stripe or Paypal accounts and get instant payouts
            directly to your account without any transactions fees from Cagaros!
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};
