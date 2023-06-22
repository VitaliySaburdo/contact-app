import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header, NavbarLink } from './AppBar.styled';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? (
        <NavbarLink to="/contacts">
          <UserMenu />
        </NavbarLink>
      ) : (
        <AuthNav />
      )}
    </Header>
  );
};
