import { useSignUpMutation } from '../redux/api/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setAuthDataOnSignup } from '../redux/features/authSlice';
import { IFormInput } from '../Schemas/SignUpSchema';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
  const [signUp, { isLoading, isError, error }] = useSignUpMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (data: IFormInput, setErrorMessages: (errors: string[]) => void) => {
    try {
      const { confirmPassword, ...formData } = data;
      const result = await signUp(formData).unwrap();
      dispatch(setAuthDataOnSignup({
        username: result.username,
        email: result.email,
        id: result.id,
      }));
      navigate('/login');
    } catch (err: any) {
      if (err.status === 400 && err.data) {
        const errorMessages = ([] as string[]).concat(
          ...Object.values(err.data).map(error =>
            Array.isArray(error) ? error : [error]
          )
        );
        setErrorMessages(errorMessages);
      } else {
        console.error('Failed to sign up:', err);
        setErrorMessages(['Failed to sign up. Please make sure the password and username are unique and different']);
      }
    }
  };

  return { handleSignUp, isLoading, isError, error };
};
