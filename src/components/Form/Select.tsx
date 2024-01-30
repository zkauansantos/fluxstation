import { Picker } from '@react-native-picker/picker';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { Text, View } from 'react-native';
import ErrorFeedback from './ErrorFeedback';
import { FormData } from './schema/supplieSchema';

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
  control,
  errors,
  options,
  placeholder,
  name,
}: SelectProps) {
  return (
    <View className='mt-3'>
      <Text className='text-blue-800 text-base mb-2'>{placeholder}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <View
            className={`border-2 rounded-lg overflow-hidden ${
              errors[name] ? 'border-red-500' : 'border-blue-900'
            }`}
          >
            <Picker selectedValue={value} onValueChange={(v) => onChange(v)}>
              {options.map((opt) => (
                <Picker.Item
                  key={opt.label}
                  label={opt.label}
                  value={opt.value}
                />
              ))}
            </Picker>
          </View>
        )}
      />

      <ErrorFeedback message={errors[name]?.message} />
    </View>
  );
}
