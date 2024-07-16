import { z } from "zod";

export const schema = z.object({
    email: z.string().email('Invalid email').nonempty('Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters').nonempty('Password is required'),
  });
  
 export type IFormInput = z.infer<typeof schema>;
  