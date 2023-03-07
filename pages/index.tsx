import Head from 'next/head';
import Image from 'next/image';
import { Container } from '@chakra-ui/react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Stats } from '@/components/stats';
import { Features } from '@/components/features';
import { Pricing } from '@/components/pricing';
import { Testimonial } from '@/components/testimonial';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <Container maxWidth="1200px">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <FAQ />
      <Testimonial />
      <Footer />
    </Container>
  );
}
