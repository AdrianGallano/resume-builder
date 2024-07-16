import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../@/components/ui/input';
import { Button } from '../@/components/ui/button';
import { IFormInput, schema } from '../Schemas/LoginSchema';

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
        console.log('success')
    //   const response = await axios.post('/api/login', data);
      // handle success (e.g., navigate to dashboard, store token)
    } catch (error) {
      // handle error (e.g., show error message)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <Input
            type="email"
            {...register('email')}
            className="mb-1"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email?.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <Input
            type="password"
            {...register('password')}
            className="mb-1"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password?.message}</p>}
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
