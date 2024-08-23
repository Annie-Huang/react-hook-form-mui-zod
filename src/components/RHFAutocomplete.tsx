import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { Autocomplete } from '@mui/material';
import { FC } from 'react';
import { Option } from '../types/option.ts';

// interface RHFAutocompleteProps<T extends FieldValues> {
type RHFAutocompleteProps<T extends FieldValues> = {
  name: Path<T>;
  options: Option[];
};

// React Hook Form Autocomplete
// export const RHFAutocomplete: FC<RHFAutocompleteProps<T extends FieldValues>> = ({ name }) => {
// Cannot get the above syntax worked....
export function RHFAutocomplete<T extends FieldValues>({
  name,
  options,
}: RHFAutocompleteProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={(params) => <Autocomplete options={options} />}
    />
  );
}
