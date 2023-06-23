import { Container } from 'components/Container/Container';
import { LoginContainer } from 'components/LoginContainer/LoginContainer';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Section } from 'components/Section/Section';

export default function Login() {
  return (
    <Section>
      <Container>
        <div style={{ display: 'flex' }}>
          <LoginContainer />
          <LoginForm />
        </div>
      </Container>
    </Section>
  );
}
