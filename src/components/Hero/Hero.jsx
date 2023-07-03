import { HeroWrapper, Title, Button, HeroLink } from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <Title>Welcome to contact service</Title>
        <HeroLink to="/register">
          <Button type="button">Try our service</Button>
        </HeroLink>
      </HeroWrapper>
    </>
  );
};
