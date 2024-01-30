import { Image } from 'expo-image';
import { FlatList, Text, View } from 'react-native';
import SupplieCard from '../../components/SupplieCard';
import useSuppliesContext from '../../hooks/useSuppliesContext';

export default function Supplies() {
  const { supplies } = useSuppliesContext();

  return (
    <View className='flex-1 bg-blue-50 py-6 relative'>
      {supplies.length > 0 && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={supplies}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <SupplieCard supplie={item} />}
        />
      )}

      {supplies.length < 1 && (
        <View className='flex-1 py-6 px-3'>
          <Text className='text-center text-blue-900 font-bold max-w-[300px] self-center text-xl'>
            Ops! Parece que você não tem nenhum registro cadastrado.
          </Text>

          <View>
            <Image
              source={require('../../../assets/empty-state.png')}
              className='w-full h-[310px] my-12'
            />
          </View>
        </View>
      )}
    </View>
  );
}
