import { Users } from './Users.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import { schema, Schema } from '../types/schema.ts';
import { zodResolver } from '@hookform/resolvers/zod';

// https://www.react-hook-form.com/api/useformcontext/
export const UsersProvider = () => {
  const methods = useForm<Schema>({
    mode: 'all', // also have a onBlur mode
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <Users />
    </FormProvider>
  );
};
