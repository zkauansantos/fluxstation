import { Image } from 'expo-image';
import { FlatList, Text, View } from 'react-native';
import Button from '../../components/Button';
import SupplieCard from '../../components/SupplieCard';
import useSuppliesContext from '../../hooks/useSuppliesContext';

export default function Supplies() {
  const { supplies, setSupplies } = useSuppliesContext();
  const hasSupplies = supplies.length > 0;

  function handleDeleteAllSupplies() {
    setSupplies([]);
  }
  return (
    <View className='flex-1 bg-blue-50 py-3 relative mx-3'>
      {hasSupplies && (
        <>
          <View className='w-[180px] self-end mb-2'>
            <Button
              color='red'
              className='py-0 px-0 h-[40px] '
              onPress={handleDeleteAllSupplies}
            >
              Apagar os registros
            </Button>
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={supplies}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <SupplieCard supplie={item} />}
          />
        </>
      )}

      {!hasSupplies && (
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
