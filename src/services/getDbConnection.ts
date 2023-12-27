import { openDatabase } from 'expo-sqlite';

export const getDBConnection = async () => {
  console.log('getDBConnection')
  return openDatabase('tanzanite.db');
};