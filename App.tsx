import { SafeAreaView, Text, View } from 'react-native';
import HomePage from './src/pages/HomePage';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323';

export default function App() {
  let [fontsLoaded] = useFonts({
    VT323_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView className='h-full flex items-center container'>
      <View className='w-full h-full'>
        <HomePage />
      </View>
    </SafeAreaView>
  );
}