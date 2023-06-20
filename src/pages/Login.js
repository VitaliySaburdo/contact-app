import { LoginContainer } from 'components/LoginContainer/LoginContainer';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div style={{ display: 'flex' }}>
      <LoginContainer />
      <LoginForm />
    </div>
  );
}
