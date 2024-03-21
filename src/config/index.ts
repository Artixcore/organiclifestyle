import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  dbURL: process.env.DATABASE_URL,
  dbName: process.env.DB_Name,
  bcryptSaltRounds: process.env.BCRYPT_SALT_ROUNDS,
};
