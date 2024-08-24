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
      render={({ field: { value, onChange, ref } }) => (
        <Autocomplete
          options={options}
          value={value.map((id: string) =>
            options.find((item) => item.id === id)
          )}
          // [{id: '1', label: 'California'}, {id: '2', label: 'Texas'}]

          getOptionLabel={(option) =>
            options?.find((item) => item.id === option.id)?.label ?? ''
          }
          // ['1', '2'] => ['California', 'Texas']

          isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
          onChange={(_, newValue) => {
            onChange(newValue.map((item) => item.id));
          }}
          // [{id: '1', label: 'California'}, ...] => ['1', '2']

          disableCloseOnSelect
          multiple
        />
      )}
    />
  );
}
