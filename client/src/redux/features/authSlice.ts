import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../types/authTypes';

const initialState: AuthState = {
  username: null,
  email: null,
  id: null,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthDataOnSignup: (state, action: PayloadAction<{ username: string, email: string, id: number }>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.id = action.payload.id;
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('email', action.payload.email);
      localStorage.setItem('id', action.payload.id.toString());
    },
    setAuthTokensOnLogin: (state, action: PayloadAction<{ token: string, refreshToken: string }>) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem('accessToken', action.payload.token);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
    },
    setUserDetails: (state, action: PayloadAction<{ username: string, email: string, id: number }>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.id = action.payload.id;
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('email', action.payload.email);
      localStorage.setItem('id', action.payload.id.toString());
    },
    clearAuthData: (state) => {
      state.username = null;
      state.email = null;
      state.id = null;
      state.token = null;
      state.refreshToken = null;
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('id');
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    },
  },
});

export const { setAuthDataOnSignup, setAuthTokensOnLogin, setUserDetails, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
