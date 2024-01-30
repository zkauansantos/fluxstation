import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { Supplie } from '../entities/Supplie';
import useSuppliesContext from '../hooks/useSuppliesContext';
import { styles } from '../styles/share/shadow';
import formatDate from '../utils/formatDate';
import { formatPrice } from '../utils/formatPrice';
import Button from './Button';

interface SupplieCardProps {
  supplie: Supplie;
}

export default function SupplieCard({ supplie }: SupplieCardProps) {
  const { setSupplies } = useSuppliesContext();

  function handleDeleteSupplie() {
    setSupplies((prev) => prev.filter((item) => item.id !== supplie.id));
  }

  return (
    <View
      style={styles.shadow}
      className='bg-white border my-2 border-gray-300 rounded-2xl p-4 mx-3 justify-between'
    >
      <View>
        <View className='flex-row w-100 items-center justify-between'>
          <Text className='text-blue-900 text-xl font-bold'>
            {supplie.gasStation}
          </Text>
          <Text>{formatDate(supplie.date)}</Text>
        </View>

        <Text>{supplie.liters}L</Text>

        <View className='flex-row w-100 items-center justify-between'>
          <Text className='text-flux-yellow font-medium mt-4 text-lg'>
            {formatPrice(supplie.value)}
          </Text>

          <Button
            color='red'
            className='p-2 rounded-full'
            onPress={handleDeleteSupplie}
          >
            <MaterialIcons name='delete' size={24} color='white' />
          </Button>
        </View>
      </View>
    </View>
  );
}
