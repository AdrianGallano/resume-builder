import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../@/components/ui/input';
import { Button } from '../@/components/ui/button';
import { IFormInput, schema } from '../Schemas/LoginSchema';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for routing
import COVER_IMG from '../assets/images/blue-cover.jpg'

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      console.log('success');
      // const response = await axios.post('/api/login', data);
      // handle success (e.g., navigate to dashboard, store token)
    } catch (error) {
      // handle error (e.g., show error message)
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
              <label className="block text-gray-700 mb-2">Email</label>
              <Input
                type="email"
                {...register('email')}
                className="mb-1 w-full"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email?.message}</p>}
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
