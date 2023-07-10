import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Box, Title, Text, Span } from './RegisterForm.styled';
import TextField from '@mui/material/TextField';
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
  name: yup.string('Enter your Name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirm: yup
    .string('Please confirm your password')
    .oneOf([yup.ref('password')], 'Password does not matched')
    .required('Confirm Password is Required'),
});

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowConfirm = () => setShowConfirm(show => !show);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ name, email, password }) => {
      dispatch(register({ name, email, password }));
    },
  });

  return (
    <>
      {isLoading && <Loader />}
      <Box>
        <Form onSubmit={formik.handleSubmit}>
          <Title>Register</Title>
          <TextField
            sx={{ height: 65 }}
            placeholder="Please enter your name"
            fullWidth
            size="small"
            margin="none"
            id="name"
            name="name"
            label="Full name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <FormControl
            sx={{
              height: 65,
            }}
            fullWidth
            size="small"
            margin="none"
          >
            <InputLabel
              error={formik.touched.email && Boolean(formik.errors.password)}
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
              error={formik.touched.confirm && Boolean(formik.errors.confirm)}
              htmlFor="confirm"
            >
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="confirm"
              placeholder="Please confirm your password"
              name="confirm"
              label="Confirm Password"
              type={showConfirm ? 'text' : 'password'}
              value={formik.values.confirm}
              onChange={formik.handleChange}
              error={formik.touched.confirm && Boolean(formik.errors.confirm)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirm}
                    edge="end"
                  >
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText error={true} id="confirm">
              {formik.touched.confirm && formik.errors.confirm}
            </FormHelperText>
          </FormControl>
          <Button
            sx={{ marginTop: '10px' }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Register
          </Button>
          <Text>
            Already have an account
            <Span>
              <NavLink to="/login">Login</NavLink>
            </Span>
          </Text>
        </Form>
      </Box>
    </>
  );
};
