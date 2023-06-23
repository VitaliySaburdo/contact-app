import { Container } from 'components/Container/Container';
import { Hero } from '../components/Hero/Hero';
import { Section } from 'components/Section/Section';

export default function Home() {

  return (
    <>
      <Section>
      <Container>
        <Hero />
        </Container>
      </Section>
    </>
  );
}
