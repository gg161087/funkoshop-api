import { Sequelize } from 'sequelize';
import { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } from './../config.js';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    port: DB_PORT
});

export default sequelize;