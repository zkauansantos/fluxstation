import { View } from 'react-native';
import FuelsList from '../../components/FuelsList';

export default function Home() {
  return (
    <View className='flex-1 bg-blue-50 pt-6'>
      <FuelsList />
    </View>
  );
}
