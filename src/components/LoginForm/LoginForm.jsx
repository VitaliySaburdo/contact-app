import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { logIn } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Box, Title, Text, Span } from './LoginForm.styled';
import { NavLink } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { selectLoading } from 'redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .max(12, 'Too long')
    .required('Password is required'),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(logIn({ values }));
    },
  });

  return (
    <>
      {isLoading && <Loader />}
      <Box>
        <Form onSubmit={formik.handleSubmit}>
          <Title>Login</Title>
          <FormControl
            sx={{
              height: 65,
            }}
            fullWidth
            size="small"
            margin="none"
          >
            <InputLabel
              error={formik.touched.password && Boolean(formik.errors.password)}
              htmlFor="email"
            >
              Email
            </InputLabel>
            <OutlinedInput
              placeholder="Please your email"
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
            />
            <FormHelperText error={true} id="password">
              {formik.touched.email && formik.errors.email}
            </FormHelperText>
          </FormControl>
          <FormControl
            sx={{
              height: 65,
            }}
            variant="outlined"
            fullWidth
            size="small"
            margin="none"
          >
            <InputLabel
              error={formik.touched.password && Boolean(formik.errors.password)}
              htmlFor="password"
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              placeholder="Please your password"
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText error={true} id="password">
              {formik.touched.password && formik.errors.password}
            </FormHelperText>
          </FormControl>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Login
          </Button>
          <Text>
            Don`t have an account
            <Span>
              <NavLink to="/register">Register</NavLink>
            </Span>
          </Text>
        </Form>
      </Box>
    </>
  );
};
