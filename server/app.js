import express from 'express';
import envConfig from './config/envConfig.js';
import cors from 'cors'
import connectDb from './config/connectDb.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';


// import routes 
import userRoute from './routes/userRoute.js';
//create app 
const app = express();
// connect to Database 
connectDb();
//use cors
app.use(cors())
app.use(express.json());


// routes
app.use('/user',userRoute);


//create port
const port = envConfig.port || 5000;


app.use(globalErrorHandler);
//listen server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

