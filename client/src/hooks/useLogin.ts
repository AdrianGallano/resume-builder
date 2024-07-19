import { useEffect, useState } from 'react';
import { useLoginMutation, useGetUserQuery } from '../redux/api/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setAuthTokensOnLogin, setUserDetails } from '../redux/features/authSlice';
import { IFormInput } from '../Schemas/LoginSchema';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const [login, { isLoading: isLoginLoading, isError: isLoginError, error: loginError }] = useLoginMutation();
  const [shouldFetchUser, setShouldFetchUser] = useState(false);
  const { data: userData, error: userError, refetch: refetchUser } = useGetUserQuery(undefined, {
    skip: !shouldFetchUser,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data: IFormInput, setErrorDetail: (error: string) => void) => {
    try {
      console.log('Attempting to login...');
      const result = await login(data).unwrap();
      console.log('Login successful, setting tokens...');
      dispatch(setAuthTokensOnLogin({
        token: result.access,
        refreshToken: result.refresh,
      }));
      console.log(localStorage.getItem('accessToken'))

      console.log('Setting flag to fetch user details...');
      setShouldFetchUser(true);
    } catch (err: any) {
      console.error('Error during login:', err);
      if (err.data && err.data.detail) {
        setErrorDetail(err.data.detail);
      } else {
        setErrorDetail('Failed to login. Please try again later.');
      }
    }
  };

  useEffect(() => {
    if (shouldFetchUser) {
      console.log('Fetching user details...');
      refetchUser();
    }
  }, [shouldFetchUser, refetchUser]);

  useEffect(() => {
    if (userData) {
      console.log('User data:', userData);
      dispatch(setUserDetails({
        username: userData.username,
        email: userData.email,
        id: userData.id,
      }));
      navigate('/dash');
    } else if (userError) {
      console.error('Failed to fetch user details:', userError);
    }
  }, [userData, userError, dispatch, navigate]);

  return { handleLogin, isLoading: isLoginLoading, isError: isLoginError, error: loginError };
};
