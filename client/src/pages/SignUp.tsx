import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../@/components/ui/input';
import { Button } from '../@/components/ui/button';
import { IFormInput, SignUpSchema } from '../Schemas/SignUpSchema';
import { Link, useNavigate } from 'react-router-dom';
import COVER_IMG from '../assets/images/blue-cover.jpg';
import { useSignUpMutation } from '../redux/api/authApi';
import { setAuthDataOnSignup } from '../redux/features/authSlice';
import { useAppDispatch } from '../redux/hooks';

const SignUp: React.FC = () => {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [signUp, { isLoading }] = useSignUpMutation();
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: zodResolver(SignUpSchema),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
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

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img src={COVER_IMG} alt="Description" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Resume Builder</h1>
          <p className="text-xl">Create a professional resume in minutes</p>
        </div>
      </div>
      <div className="flex flex-col justify-center lg:w-1/2 p-8">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <Input
                type="email"
                {...register('email')}
                className="mb-1 w-full"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email?.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username</label>
              <Input
                type="username"
                {...register('username')}
                className="mb-1 w-full"
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username?.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <Input
                type="password"
                {...register('password')}
                className="mb-1 w-full"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password?.message}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Confirm Password</label>
              <Input
                type="password"
                {...register('confirmPassword')}
                className="mb-1 w-full"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>}
            </div>
            <Button type="submit" className="w-full bg-blue-500 text-white rounded">Sign Up</Button>
            {errorMessages.length > 0 && (
              <div className="mt-4 text-red-500">
                {errorMessages.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">Already a user? <Link to="/login" className="text-blue-500">Login here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
