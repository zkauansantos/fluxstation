import { Stack } from 'expo-router';
import SuppliesContextProvider from '../contexts/SuppliesContext';

export default function RootLayout() {
  return (
    <SuppliesContextProvider>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name='(tabs)'
          options={{
            title: '',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name='register-supplie'
          options={{
            title: 'Registrar abastecimento',
          }}
        />
      </Stack>
    </SuppliesContextProvider>
  );
}
