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
}