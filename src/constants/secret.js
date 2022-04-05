import env from 'dotenv';
env.config();

export const DB_CONFIG = {
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST
  }
};
export const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;
export const JWT_CONFIG = {
  SECRET_KEY: process.env.SECRET_KEY,
  EXPIRE_DATE: process.env.EXPIRE_DATE
};
