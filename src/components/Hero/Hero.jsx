import { Container, Title, Button, HeroLink } from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <Container>
        <Title>Welcome to contact service</Title>
        <HeroLink to="/register">
          <Button type="button">Try our service</Button>
        </HeroLink>
      </Container>
      {/* <Link/> */}
    </>
  );
};
