import React, { useState } from 'react';
import { Control, FieldErrors, useFormContext } from 'react-hook-form';
import { ActionSheetIOS, Text, View } from 'react-native';
import Button from '../Button';
import ErrorFeedback from './ErrorFeedback';

interface SelectProps {
  control: Control<FormData, any>;
  errors: FieldErrors<FormData>;
  name: keyof FormData;
  placeholder: string;
  options: {
    label: string;
    value: string | number;
  }[];
}

export default function Select({
  errors,
  options,
  name,
  placeholder,
}: SelectProps) {
  const { setValue, clearErrors } = useFormContext();
  const [defferedValue, setDefferedValue] = useState('');

  function onChangeOption() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: options.map((opt) => opt.label),
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        const selectedOption = options[buttonIndex];

        if (selectedOption) {
          clearErrors(name);
          setDefferedValue(selectedOption.label);
          setValue(name, selectedOption.value);
        }
      }
    );
  }
  return (
    <View className='mt-3'>
      <Text className='text-blue-800 text-base mb-2'>{placeholder}</Text>

      <Button
        className={`bg-transparent border-2 rounded-lg items-start px-4 ${
          errors[name] ? 'border-red-500' : 'border-blue-900'
        }`}
        onPress={onChangeOption}
      >
        <Text className='text-black capitalize font-normal'>
          {defferedValue || 'Selecione'}
        </Text>
      </Button>
      <ErrorFeedback message={errors[name]?.message} />
    </View>
  );
}
