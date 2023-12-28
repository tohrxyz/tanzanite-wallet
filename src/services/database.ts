import { getDBConnection } from "./getDbConnection";

export class AppDatabase {  
  constructor() {
    console.log('AppDatabase constructor');
  }

  async insertIntoTable(table: string, column: any, value: any) {
    console.log('insertIntoTable');
    
    try {
      const db = await getDBConnection();
      console.log("db connected");

      const sql = `INSERT INTO ${table} (${column}) VALUES (?)`;
      console.log("sql", sql);

      db.transaction((tx) => {
        console.log("tx", tx);
        tx.executeSql(sql, [value]);
        console.log("tx executed");
      })
    } catch (error) {
      console.error(`Error while inserting ${column}: ${value} into table ${table}:  `, error);
    }
  }

  async selectFromTable(table: string, column: any, value: any) {
    console.log('selectFromTable');
  
    try {
      const db = await getDBConnection();
      console.log("db connected");
  
      const sql = `SELECT ${column} FROM ${table} WHERE id = ?`;
      console.log("sql", sql);
  
      return new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            sql,
            [value],
            (_, { rows }) => {
              console.log("tx executed");
              console.log("rows", rows?._array)
              resolve(rows._array); // Assuming you're using a library like Expo SQLite
            },
            (_, error) => {
              console.error(`Error while selecting ${column}: ${value} from table ${table}: `, error);
              reject(error); // reject the promise if there's an error
              return true;
            }
          );
        });
      });
  
    } catch (error) {
      console.error(`Error while connecting to the database: `, error);
      throw error; // throw the error so it can be handled by the caller
    }
  }
  
}