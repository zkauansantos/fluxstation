import React, { forwardRef } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';
import { VariantProps, tv } from 'tailwind-variants';
import { isAndroid } from '../constants/platform';

const button = tv({
  base: 'rounded-xl transition-all items-center justify-center py-4 px-10',
  variants: {
    state: {
      disabled: 'bg-gray-300',
    },
    color: {
      yellow: 'bg-flux-yellow',
      blue: 'bg-blue-900',
      red: 'bg-red-600',
    },
  },
  defaultVariants: {
    state: 'disabled',
    color: 'yellow',
  },
});

interface ButtonProps extends PressableProps, VariantProps<typeof button> {
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<View, ButtonProps>(
  ({ children, disabled, color, state, className, ...props }, ref) => (
    <View className='overflow-hidden rounded-lg'>
      <Pressable
        ref={ref}
        style={({ pressed }) => [
          pressed && {
            opacity: isAndroid ? 1 : 0.5,
          },
          { elevation: 6 },
        ]}
        android_ripple={{
          color: '#000',
        }}
        className={button({
          color,
          state,
          className,
        })}
        disabled={disabled}
        {...props}
      >
        <Text className='text-white font-bold uppercase'>{children}</Text>
      </Pressable>
    </View>
  )
);

export default Button;
