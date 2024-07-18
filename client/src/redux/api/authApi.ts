import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResponse, LoginRequest, SignUpRequest, SignUpResponse } from '../types/authTypes';


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/jwt/create/',
        method: 'POST',
        body: credentials,
      }),
    }),
    signUp: builder.mutation<SignUpResponse,SignUpRequest>({
      query: (userData) => ({
        url: '/auth/users/',
        method: 'POST',
        body: userData,
      }),
    }),
    refresh: builder.mutation<AuthResponse, { refresh: string }>({
      query: (refreshToken) => ({
        url: '/auth/jwt/refresh/',
        method: 'POST',
        body: refreshToken,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useRefreshMutation } = authApi;
