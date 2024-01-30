import React from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import ErrorFeedback from './ErrorFeedback';
import { FormData } from './schema/supplieSchema';

interface FieldProps {
  control: Control<FormData, any>;
  name: keyof FormData;
  errors: FieldErrors<FormData>;
  placeholder: string;
  number?: boolean;
  maxLength?: number;
}

export default function Field({
  control,
  name,
  placeholder,
  errors,
  number,
  maxLength = 200,
}: FieldProps) {
  return (
    <View className='mt-3'>
      <Text className='text-blue-800 text-base mb-1'>{placeholder}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className={`rounded-lg  color-blue-900 border-2 p-3 w-100 ${
              errors[name] ? 'border-red-500' : 'border-blue-900'
            }`}
            onChangeText={onChange}
            onBlur={onBlur}
            value={String(value)}
            placeholderTextColor='#555'
            keyboardType={number ? 'number-pad' : 'default'}
            maxLength={maxLength}
            returnKeyType='done'
          />
        )}
      />

      <ErrorFeedback message={errors[name]?.message} />
    </View>
  );
}
