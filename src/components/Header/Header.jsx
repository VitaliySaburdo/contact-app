import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import {
  AuthNavWrapper,
  HeaderWrapper,
  MobileNavWrapper,
  NavWrapper,
  NavbarLink,
} from './Header.styled';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Container } from 'components/Container/Container';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

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
            <AuthNavWrapper>
              <AuthNav />
            </AuthNavWrapper>
          )}
        </NavWrapper>
        <MobileNavWrapper>
          <BurgerMenu />
        </MobileNavWrapper>
      </Container>
    </HeaderWrapper>
  );
};
