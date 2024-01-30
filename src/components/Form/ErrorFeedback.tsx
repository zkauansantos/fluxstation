import { Text } from 'react-native';

interface ErrorFeedbackProps {
  message: string | undefined;
}

export default function ErrorFeedback({ message }: ErrorFeedbackProps) {
  if (!message) return null;

  return <Text className='text-xs text-red-500 mt-1'>{message}</Text>;
}
