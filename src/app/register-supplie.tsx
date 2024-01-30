import { MaterialIcons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import Button from '../components/Button';
import { DatePicker, Field, Select } from '../components/Form';

import { useRouter } from 'expo-router';
import { FormData, schema } from '../components/Form/schema/supplieSchema';
import useSuppliesContext from '../hooks/useSuppliesContext';
import { fuels } from '../mocks/fuels';
import { gasStations } from '../mocks/gasStations';
import delay from '../utils/delay';

export default function RegisterSupplie() {
  const { setSupplies } = useSuppliesContext();
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: new Date(),
      liters: '',
      gasStation: '',
      fuel: '',
    },
  });

  const {
    reset,
    control,
    formState: { errors },
    handleSubmit: hookFormHandleSubmit,
  } = methods;

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    setIsLoading(true);
    const { liters, gasStation, fuel, date } = data;

    const newSupplie = {
      id: Math.random(),
      liters: Number(liters),
      value: Number(fuel) * Number(liters),
      gasStation,
      fuel,
      date,
    };

    setSupplies((prev) => [...prev, newSupplie]);

    await delay();

    setSuccess(true);
    setIsLoading(false);
    reset();
    router.push('/(tabs)/supplies');
  });

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 24,
      }}
      className='flex-1 px-4 my-8'
    >
      <FormProvider {...methods}>
        <Select
          control={control}
          errors={errors}
          placeholder='Tipo de Combustível'
          options={fuels}
          name='fuel'
        />

        <Field
          control={control}
          name='liters'
          number
          errors={errors}
          placeholder='Quantidade de Litros'
        />

        <Select
          control={control}
          errors={errors}
          placeholder='Posto de Gasolina'
          options={gasStations}
          name='gasStation'
        />

        <DatePicker
          control={control}
          name='date'
          errors={errors}
          placeholder='Data do abastecimento'
        />

        <Button className='mt-12' disabled={isLoading} onPress={handleSubmit}>
          {!isLoading && 'Registrar'}
          {isLoading && <ActivityIndicator color='black' />}
        </Button>

        {success && (
          <View className='items-center flex-row mt-6'>
            <MaterialIcons name='check' size={28} color='green' />
            <Text className='text-green-700'>
              Abastecimento registrado com sucesso!
            </Text>
          </View>
        )}
      </FormProvider>
    </ScrollView>
  );
}
