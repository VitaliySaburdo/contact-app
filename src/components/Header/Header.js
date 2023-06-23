import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { HeaderWrapper, NavWrapper, NavbarLink } from './Header.styled';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Container } from 'components/Container/Container';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <HeaderWrapper>
      <Container>
        <NavWrapper>
          <Navigation />
          {isLoggedIn ? (
            <NavbarLink to="/contacts">
              <UserMenu />
            </NavbarLink>
          ) : (
            <AuthNav />
          )}
        </NavWrapper>
      </Container>
    </HeaderWrapper>
  );
};
