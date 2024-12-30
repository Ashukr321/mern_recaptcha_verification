
// ⭐ IMPORT MONGOOSE ⭐
import mongoose from 'mongoose';
import envConfig from './envConfig.js';

// CREATE FUNCTION TO CONNECT DAATABASE ⭐⭐
const connectDb = async ()=>{
  try {
  const db =  mongoose.connect(envConfig.dbUrl,{
    dbName:envConfig.dbName
  });
  db.then(()=>{
    console.log('Database Connected Successfully!');
  })
  }catch(error){
    console.log(`Error Occurred While Connecting to the database error`)
  }
}	
// 🤷‍♂️ EXPORT DATABASE FUNCTION 🧑‍💻
export default  connectDb;

