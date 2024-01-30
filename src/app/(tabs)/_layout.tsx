import { MaterialIcons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import useSuppliesContext from '../../hooks/useSuppliesContext';

export default function TabRoutes() {
  const router = useRouter();
  const { supplies } = useSuppliesContext();

  return (
    <Tabs
      screenOptions={{
        headerLeft: () => (
          <Image
            source={require('../../../assets/logo.jpeg')}
            className='rounded-lg ml-3 mt-6 w-[50px] h-[50px]'
          />
        ),
        headerBackground: () => <View className='flex-1 bg-blue-50' />,
        headerRight: () => (
          <View className='w-[150px] self-end mr-3 mt-6'>
            <Button
              color='blue'
              className='py-0 px-0 h-[40px]'
              onPress={() => router.push('/register-supplie')}
            >
              Abastecer
            </Button>
          </View>
        ),
      }}
      tabBar={({ state, navigation, descriptors }) => {
        return (
          <View className='items-center justify-center'>
            <View className='flex-row gap-2 mb-6 absolute bottom-0'>
              {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                function onPress() {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                  }
                }

                function onLongPress() {
                  navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                  });
                }

                return (
                  <TouchableOpacity
                    key={Math.random()}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    className='items-center justify-center rounded-full bg-white shadow-flux-shadow'
                  >
                    <View className='items-center justify-center p-3'>
                      <View className='items-center justify-center p-2'>
                        {options.tabBarIcon &&
                          options.tabBarIcon({
                            size: 32,
                            color: isFocused ? '#FFA41B' : '#A0AEC0',
                            focused: isFocused,
                          })}
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        );
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='attach-money' size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='supplies'
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='car-crash' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
