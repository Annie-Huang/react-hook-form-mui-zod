import { useForm, useFormContext } from 'react-hook-form';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { schema, Schema } from '../types/schema.ts';
import { zodResolver } from '@hookform/resolvers/zod';

/*// Version of Users without using Zod:
export const Users = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string }>({ mode: 'all' }); // also have a onBlur mode

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    // Using handleSubmit to wrap onSubmit will make sure on submit method will only be called when the form is value.
    // e.g click into the input and just press enter will show you error message
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: { value: true, message: 'The email is required' },
          maxLength: { value: 10, message: 'Too many characters' },
        })}
        placeholder='Email'
      />
      <p>{errors.email?.message}</p>
    </form>
  );
};*/

export const Users = () => {
  /*
  // Shift this to the UserProvider level so we can use useForm with useFormContext between parent and children, rather than passing props one by one for each field.
  // https://www.react-hook-form.com/api/useformcontext/
  const {
    register,
    formState: { errors },
  } = useForm<Schema>({
    mode: 'all', // also have a onBlur mode
    resolver: zodResolver(schema),
  });
*/

  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();

  // console.log('register=', register('name')); // got name, onBlur, onChange, ref
  // console.log('register=', register('email'));

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register('name')}
        label='Name'
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register('email')}
        label='Email'
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Autocomplete
        options={[{ id: '1', label: 'Texas' }]}
        renderInput={(params) => <TextField {...params} label='states' />}
      />
    </Stack>
  );
};
