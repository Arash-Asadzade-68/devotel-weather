import express from 'express';
import { removeAccessToken } from '../controllers/user.controller';

export const userRouter = express.Router();

userRouter.get('/sign-out', removeAccessToken)