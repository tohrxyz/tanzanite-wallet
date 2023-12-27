import { SafeAreaView, Text } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323';
import { NativeRouter, Route, Routes } from "react-router-native"
import WalletScreen from './src/screens/WalletScreen';
import { getDBConnection } from './src/services/getDbConnection';
import { useCallback, useEffect } from 'react';
import RecoveryScreen from './src/screens/RecoveryScreen';
import { AppDatabase } from './src/services/database';

export default function App() {
  const loadDbData = useCallback(async () => {
    try {
      const db = await getDBConnection();
      console.log("Connected to DB")
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS wallet (id INTEGER PRIMARY KEY NOT NULL, isCreated BOOLEAN NOT NULL, seed TEXT);',
          [],
          (_, result) => console.log("Create table result: ", result),
          (_, error) => {
            console.error("Error with creating table: ", error)
            return false;
          }
        );
      
      })
      db.transaction(tx => {
        tx.executeSql(
          'SELECT isCreated FROM wallet WHERE id = ?',
          [1],
          (_, { rows }) => {
            const isCreated = rows?._array[0]?.isCreated;
            console.log("Select isCreated result: ", rows?._array[0]?.isCreated)

            if (isCreated === undefined || isCreated === null) {
              console.log("isCreated is null or undefined")
              const appDB = new AppDatabase();

              appDB.insertIntoTable("wallet", "isCreated", "false");
            }
          },
          (_, error) => {
            console.error('Error with selecting isCreated: ', error);
            return false; // Return false to roll back the transaction
          }
        );
      });
    } catch (err) {
      console.error(err);
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
          <Route path="/recover" Component={RecoveryScreen} />
        </Routes>
      </SafeAreaView>
    </NativeRouter>
  );
}