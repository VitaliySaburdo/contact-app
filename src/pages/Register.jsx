import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegistrationContainer } from '../components/RegistrationContainer/RegestrationContainer';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';

export default function Register() {
  return (
    <Section>
      <Container>
        <div style={{ display: 'flex' }}>
          <title>Registration</title>
          <RegistrationContainer />
          <RegisterForm />
        </div>
      </Container>
    </Section>
  );
}
