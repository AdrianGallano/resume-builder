import { z } from "zod";

export const SignUpSchema = z.object({
    email: z.string().email('Invalid email').nonempty('Email is required'),
    username: z.string().nonempty('Username is required'),
    password: z.string().min(8, 'Password must be at least 8 characters').nonempty('Password is required'),
    confirmPassword: z.string()
      .min(6, 'Confirm Password must be at least 6 characters')
      .nonempty('Confirm Password is required')
  }).superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords don't match",
          path: ['confirmPassword']
        });
      }
    });;
  
 export type IFormInput = z.infer<typeof SignUpSchema>;