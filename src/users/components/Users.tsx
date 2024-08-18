import { useForm } from 'react-hook-form';

export const Users = () => {
  const {
    register,
    formState: { errors },
  } = useForm<{ email: string }>({ mode: 'all' }); // also have a onBlur mode

  return (
    <>
      <input
        {...register('email', {
          required: { value: true, message: 'The email is required' },
          maxLength: { value: 10, message: 'Too many characters' },
        })}
        placeholder='Email'
      />
      <p>{errors.email?.message}</p>
    </>
  );
};
