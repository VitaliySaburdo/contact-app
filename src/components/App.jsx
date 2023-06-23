import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from '../helpers/PrivateRoute';
import { RestrictedRoute } from '../helpers/RestrictedRoute';
import { Layout } from './Layout/Layout';
import { theme } from '../theme/theme';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
