import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notify } from '../../helpers/notification';

axios.defaults.baseURL = 'https://contacts-api-servise.onrender.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.message === 'Request failed with status code 409') {
        notify(
          'warning',
          `User ${credentials.email} is already registered, please login`
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ values }, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', values);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.message === 'Request failed with status code 401') {
        notify(
          'warning',
          `User "${values.email}" is not found, please register and try again`
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
