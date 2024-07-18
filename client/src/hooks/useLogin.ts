import { useLoginMutation } from '../redux/api/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setAuthTokensOnLogin } from '../redux/features/authSlice';
import { IFormInput } from '../Schemas/LoginSchema';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate=useNavigate()

  const handleLogin = async (data: IFormInput,  setErrorDetail: (error: string) => void) => {
    try {
        const result = await login(data).unwrap();
        dispatch(setAuthTokensOnLogin({
          token: result.access,
          refreshToken: result.refresh,
        }));
        navigate('/dash')
        console.log('Login successful:', result);
        // Handle successful login (e.g., redirect to dashboard)
      } catch (err: any) {
        if (err.data && err.data.detail) {
          setErrorDetail(err.data.detail);
        } else {
          setErrorDetail('Failed to login. Please try again later.'); // Fallback message
        }
      }
  };

  return { handleLogin, isLoading, isError, error };
};
