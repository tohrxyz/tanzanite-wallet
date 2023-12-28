import { SafeAreaView, Text, View } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323';
import { NativeRouter, Route, Routes } from "react-router-native"
import WalletScreen from './src/screens/WalletScreen';
import RecoveryScreen from './src/screens/RecoveryScreen';
import RoutesNavigation from './src/router/RoutesNavigation';

export default function App() {
  let [fontsLoaded] = useFonts({
    VT323_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NativeRouter>
      <SafeAreaView className='bg-[#292a2d]'>
        <View className='bg-[#292a2d] min-h-screen w-full text-white'>
          <Routes>
            <Route path="*" Component={RoutesNavigation} />
            <Route path="/intro" Component={IntroScreen} />
            <Route path="/wallet" Component={WalletScreen} />
            <Route path="/recover" Component={RecoveryScreen} />
          </Routes>
        </View>
      </SafeAreaView>
    </NativeRouter>
  );
}