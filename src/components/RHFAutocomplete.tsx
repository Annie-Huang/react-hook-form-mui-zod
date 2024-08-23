import { Controller } from 'react-hook-form';
import { Autocomplete } from '@mui/material';

// React Hook Form Autocomplete
export const RHFAutocomplete = () => {
  return <Controller render={(params) => <Autocomplete />} />;
};
