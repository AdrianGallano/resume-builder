import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../@/components/ui/input';
import { Button } from '../@/components/ui/button';
import { IFormInput, schema } from '../Schemas/LoginSchema';
import { Link, useNavigate } from 'react-router-dom';
import COVER_IMG from '../assets/images/blue-cover.jpg';
import { useLogin } from '../hooks/useLogin';

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: zodResolver(schema),
  });

  const [errorDetail, setErrorDetail] = useState<string | null>(null); // State to hold error detail message
  const { handleLogin, isLoading, isError, error } = useLogin();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setErrorDetail(null); 
    try {
      await handleLogin(data, setErrorDetail);
    } catch (err) {
      // Additional error handling if needed
    }
  };


  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img src={COVER_IMG} alt="Description" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
          <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
          <p className="text-xl">Log in to continue using the Resume Builder</p>
        </div>
      </div>
      <div className="flex flex-col justify-center lg:w-1/2 p-8">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button type="submit" className="w-full bg-blue-500 text-white rounded">Login</Button>
            {errorDetail && (
              <div className="mt-4 text-red-500">
                <p>{errorDetail}</p>
              </div>
            )}
          </form>
          <div className="mt-4 text-center">
            <p className="text-gray-600">New user? <Link to="/" className="text-blue-500">Sign Up here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
