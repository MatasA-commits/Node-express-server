import mysql from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';
import config from '../../../../config';

export const emailAvailable = async (email: string): Promise<boolean> => {
  const mySqlConnection = await mysql.createConnection(config.db);

  const preparedSql = `
  SELECT 1
  FROM users
  WHERE users.email = ?;
  `;
  const preparedSqlData = [email];
  const [recordArr] = await mySqlConnection.query<RowDataPacket[]>(preparedSql, preparedSqlData);
  mySqlConnection.end();

  return recordArr.length === 0;
};
