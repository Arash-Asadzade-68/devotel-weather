import express from 'express';
import { signIn, signUp, federatedSignIn } from '../controllers/auth.controller';


export const authRouter = express.Router();


authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/google', federatedSignIn);