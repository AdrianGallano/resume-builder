import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../@/components/ui/input';
import { Button } from 'react-day-picker';
import { IFormInput, SignUpSchema } from '../Schemas/SignUpSchema';

const SignUp: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
        console.log('success')
    //   const response = await axios.post('/api/signup', data);
    //   // handle success (e.g., navigate to login page, show success message)
    } catch (error) {
      // handle error (e.g., show error message)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            {...register('email')}
            className="mb-1 w-full px-3 py-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email?.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            {...register('password')}
            className="mb-1 w-full px-3 py-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password?.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword')}
            className="mb-1 w-full px-3 py-2 border rounded"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>}
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;