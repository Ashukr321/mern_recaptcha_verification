import {config} from 'dotenv'
config();

const envConfig = {
  port:process.env.PORT,
  dbUrl:process.env.DB_URL,
  dbName:process.env.DB_NAME
}

export default envConfig;