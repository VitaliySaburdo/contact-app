import { RegisterLink, LogoLink, Container } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <LogoLink to="/login">Login</LogoLink>
      <RegisterLink to="/register">Register</RegisterLink>
    </Container>
  );
};
