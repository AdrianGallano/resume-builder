import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResponse, LoginRequest, SignUpRequest, SignUpResponse, UserResponse } from '../types/authTypes';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api',
    // prepareHeaders: (headers, { getState }) => {
    //   // Add Basic Auth credentials if needed
    //   const username ='javeriazaheer'
    //   const password = '21082003jz'; 
    //   const encodedCredentials = btoa(`${username}:${password}`);
    //   headers.set('Authorization', `Basic ${encodedCredentials}`);

    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/jwt/create/',
        method: 'POST',
        body: credentials,
      }),
    }),
    signUp: builder.mutation<SignUpResponse, SignUpRequest>({
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
    getUser: builder.query<UserResponse, void>({
      query: () => ({
        url: '/auth/users/me/',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useRefreshMutation, useGetUserQuery } = authApi;
