import { Link } from 'expo-router';
import { Image, StatusBar, Text, View } from 'react-native';
import Button from '../components/Button';

export default function InitialPage() {
  return (
    <View className='flex-1 bg-blue-50 justify-center px-6'>
      <StatusBar backgroundColor="#EBF8FF"/>
      <View>
        <View>
          <Text className='text-3xl font-bold mb-6 text-blue-900'>
            Bem-vindo à Fluxstation
          </Text>
          <Text className='max-w-[350px] text-base text-blue-900'>
            Registre seus abastecimentos, acompanhe seu consumo e consulte seu
            histórico de forma eficiente e econômica.
          </Text>
        </View>

        <Image
          source={require('../../assets/hero-truck.png')}
          className='max-w-[380px] h-[310px] my-12'
        />

        <Link href='/(tabs)/' asChild>
          <Button>Entrar</Button>
        </Link>
      </View>
    </View>
  );
}
