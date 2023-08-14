import mysql from 'mysql2/promise';
import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } from './../config.js';

const connection = mysql.createPool({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
    port: 3308,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const getConnection = () => {
    return connection;
};