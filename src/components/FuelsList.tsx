import { FlatList, Text, View } from 'react-native';
import { fuels } from '../mocks/fuels';
import { styles } from '../styles/share/shadow';
import { formatPrice } from '../utils/formatPrice';

export default function FuelsList() {
  return (
    <View className='mt-4 pb-8'>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={fuels.filter((fuel) => fuel.label !== 'Selecione')}
        keyExtractor={(fuel) => fuel.label}
        renderItem={({ item: { label, value, gasStation } }) => (
          <View
            style={styles.shadow}
            className='bg-white border border-gray-300 h-[140px] m-2 mx-3 rounded-2xl p-4 justify-between'
          >
            <View>
              <Text className='text-blue-900 text-xl font-bold'>{label}</Text>
              <Text className='text-blue-900 text-xs font-bold uppercase'>
                <Text className='text-flux-yellow'>//</Text>
                  {gasStation}
                </Text>
            </View>

            <Text className='text-xl font-bold text-blue-900'>
              {formatPrice(value)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
