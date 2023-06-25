import { StyledNavLink, Container } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Container>
      <StyledNavLink to="/login">Login</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
    </Container>
  );
};
