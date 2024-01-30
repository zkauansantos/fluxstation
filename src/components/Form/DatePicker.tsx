import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { Text, View } from 'react-native';
import formatDate from '../../utils/formatDate';
import Button from '../Button';
import ErrorFeedback from './ErrorFeedback';
import { FormData } from './schema/supplieSchema';

interface DatePickerProps {
  control: Control<FormData, any>;
  errors: FieldErrors<FormData>;
  name: keyof FormData;
  placeholder: string;
}

export default function DatePicker({
  control,
  errors,
  placeholder,
  name,
}: DatePickerProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <View className='mt-3'>
      <Text className='text-blue-800 text-base mb-1'>{placeholder}</Text>

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <>
            <Button
              className={`bg-transparent border-2 rounded-lg items-start px-4 ${
                errors[name] ? 'border-red-500' : 'border-blue-900'
              }`}
              onPress={() => setShowDatePicker(true)}
            >
              <Text className='text-black capitalize font-normal'>
                <>{console.log({ value })}</>
                {value && formatDate(value)}
                {!value && 'Selecione uma data'}
              </Text>
            </Button>

            {showDatePicker && (
              <DateTimePicker
                value={new Date(value)}
                is24Hour={true}
                onChange={(v) => {
                  onChange(new Date(v.nativeEvent.timestamp));
                  setShowDatePicker(false);
                }}
              />
            )}
          </>
        )}
      />

      <ErrorFeedback message={errors[name]?.message} />
    </View>
  );
}
