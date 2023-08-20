import z from 'zod';
import { UserType } from '../types/user';

const userScheme = z.object({
  email: z.string({
    required_error: "Email is a required field",
    invalid_type_error: 'The email must be a string'
  }),
  password: z.string({
    invalid_type_error: ' The password must be a string',
    required_error: 'The password is a requiered field',
  }).min(5,"The password must have at least 5 characters").max(20, "The password can have at most 20 characters")
})

export const validateUser = (object:UserType) => {
  return userScheme.safeParseAsync(object)
};