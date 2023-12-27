import { SafeAreaView, Text } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323';
import { NativeRouter, Route, Routes } from "react-router-native"
import WalletScreen from './src/screens/WalletScreen';
import { getDBConnection } from './src/services/getDbConnection';
import { useCallback, useEffect } from 'react';

export default function App() {
  const loadDbData = useCallback(async () => {
    try {
      const db = await getDBConnection();
      console.log("Connected to DB")
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    loadDbData();
  }, [loadDbData])

  let [fontsLoaded] = useFonts({
    VT323_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NativeRouter>
      <SafeAreaView>
        <Routes>
          <Route path="/" Component={IntroScreen} />
          <Route path="/wallet" Component={WalletScreen} />
          {/* <Route path="/recover" Component={RecoverScreen} /> */}
        </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
}