import { openDatabase } from 'expo-sqlite';

export const getDBConnection = async () => {
  console.log('getDBConnection')
  return openDatabase('tanzanite.db');
};

export const createTable = async (db: any) => {
  console.log('createTable')
  return db.exec([{ sql: `CREATE TABLE IF NOT EXISTS wallet (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT NOT NULL,
    isCreated BOOLEAN DEFAULT FALSE,
    ` }]);
}