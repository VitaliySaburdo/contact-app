import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegistrationContainer } from '../components/RegistrationContainer/RegestrationContainer';

export default function Register() {
  return (
    <div style={{ display: 'flex' }}>
      <title>Registration</title>
      <RegistrationContainer />
      <RegisterForm />
    </div>
  );
}
