import { SafeAreaView, Text, View } from 'react-native';
import HomePage from './src/pages/HomePage';

export default function App() {
  return (
    <SafeAreaView className='h-full flex items-center'>
      <HomePage />
    </SafeAreaView>
  );
}