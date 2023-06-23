import { HeroWrapper, Title, Button, HeroLink } from './Hero.styled';
import { Container } from '../Container/Container';
import { Section } from '../Section/Section';

export const Hero = () => {
  return (
    <>
      <Section>
        <Container>
          <HeroWrapper>
            <Title>Welcome to contact service</Title>
            <HeroLink to="/register">
              <Button type="button">Try our service</Button>
            </HeroLink>
          </HeroWrapper>
        </Container>
      </Section>
    </>
  );
};
