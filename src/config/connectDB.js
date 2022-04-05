import Sequelize from 'sequelize';
import { DB_CONFIG } from 'constants/secret';

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:'); // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname'); // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  DB_CONFIG.db.user,
  DB_CONFIG.db.name,
  DB_CONFIG.db.password,
  {
    host: DB_CONFIG.db.host,
    dialect: 'mysql'
  }
);

export const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
