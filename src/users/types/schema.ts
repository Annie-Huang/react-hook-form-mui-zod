import { z } from 'zod';
import { patterns } from '../../constants.ts';

export const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .refine(
      (text: string) => {
        // valid the text to be email
        // if it is true
        // else if it is not valid email
        return patterns.email.test(text);
      },
      { message: 'Email not valid' }
    ),
});
