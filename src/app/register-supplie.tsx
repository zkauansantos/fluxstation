import { MaterialIcons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';

import Button from '../components/Button';
import { DatePicker, Field, Select } from '../components/Form';

import { useRouter } from 'expo-router';
import { FormData, schema } from '../components/Form/schema/supplieSchema';
import useSuppliesContext from '../hooks/useSuppliesContext';
import { fuels } from '../mocks/fuels';
import { gasStations } from '../mocks/gasStations';

export default function RegisterSupplie() {
  const { setSupplies } = useSuppliesContext();
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const {
    reset,
    control,
    formState: { errors },
    handleSubmit: hookFormHandleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      date: new Date(),
      liters: '',
      gasStation: '',
      fuel: '',
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
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
    setSuccess(true);
    reset();

    setTimeout(() => {
      setSuccess(false);
    }, 1000);

    router.push('/(tabs)/supplies');
  });

  return (
    <View className='flex-1 px-4 my-8'>
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

      <Button className='mt-12' onPress={handleSubmit}>
        Registrar
      </Button>

      {success && (
        <View className='items-center flex-row mt-6'>
          <MaterialIcons name='check' size={28} color='green' />
          <Text className='text-green-700'>
            Abastecimento registrado com sucesso!
          </Text>
        </View>
      )}
    </View>
  );
}
