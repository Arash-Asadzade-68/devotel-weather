import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { userRouter } from './routes/user.route';
import { authRouter } from './routes/auth.route';

dotenv.config();

try{
  //@ts-ignore
  mongoose.connect(process?.env?.MONGO_DB_CONNECTION_URL);
  console.log('Connected')
}catch(error){
  console.log('DisConnected', error)
}

const app = express();

app.listen(3000, ()=>{
  console.log('Server is Running on Port 3000')
})


// alowing to send json to server
app.use(express.json());

//user authentication
app.use('/api/auth', authRouter);

//user routes
app.use('/api/user', userRouter);

//handeling errors using middleware
app.use((err:{
  statusCode?:number,
  message?:string
} , req:Request, res:Response, next:NextFunction) =>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})
