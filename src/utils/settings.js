import env from 'dotenv';
env.config();

export const Settings = {
  // The database connection settings
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST
  }
};
