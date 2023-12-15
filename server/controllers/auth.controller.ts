import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { errorHandler } from "../utils/errorHandler";


export async function signUp(req:Request, res:Response, next:NextFunction){
  const { body } = req;
  const { username, password, email } = body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const newUser = new User({username, password:hashedPassword, email});

  try {
    await newUser.save();
    //@ts-ignore
    const token = jwt.sign({id:newUser._id}, process?.env?.JWT_SECRET);
    res
    .cookie('access_token', token, {httpOnly:true, expires:new Date(Date.now() + 24 * 60 * 60 * 1000)})
    .status(200)
    .json({
      id:newUser._id,
      username: newUser.username,
      email: newUser.email,
      avatar:newUser.avatar,
      success:true
    });
  } catch (error:unknown) {
    if(error instanceof Error){
      next(errorHandler(500,error.message));
    }
  }
}

export async function signIn(req:Request, res:Response, next:NextFunction){
  const { password, email } = req.body;

  try {
    const validUser = await User.findOne({email});
    if(!validUser){
      return next(errorHandler(404,'User not found!'));
    }
    if(!bcryptjs.compareSync(password, validUser.password)){
      return next(errorHandler(401,'Wrong credentials!'));
    }

    //@ts-ignore
    const token = jwt.sign({id:validUser._id}, process?.env?.JWT_SECRET);

    res
      .cookie('access_token', token, {httpOnly:true, expires:new Date(Date.now() + 24 * 60 * 60 * 1000)})
      .status(201)
      .json({
        id:validUser._id,
        username: validUser.username,
        email: validUser.email,
        avatar:validUser.avatar,
        success:true
      });
  } catch (error:unknown) {
    if(error instanceof Error){
      next(errorHandler(404,error.message));
    }
  }
}


//Google SignIn/SignOut
export async function federatedSignIn(req:Request, res:Response, next:NextFunction){
  const { name, email, avatar } = req.body;

  try {
      const user = await User.findOne({email});
      if(user){
        //@ts-ignore
        const token = jwt.sign({id:user._id}, process?.env?.JWT_SECRET);
        res
        .cookie('access_token', token, {httpOnly:true, expires:new Date(Date.now() + 24 * 60 * 60 * 1000)})
        .status(200)
        .json({
          id:user._id,
          username: user.username,
          email: user.email,
          avatar:user.avatar,
          success:true
        });
      }else{
        //0-9 and a-Z
        // it creates a number like 0.45s8gfdg , so we slice to remove the decimal part
        const generateTempPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generateTempPassword, 10);
        const newUser = new User({
          username:name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4),
          password:hashedPassword,
          avatar,
          email
        });

        await newUser.save();
        //@ts-ignore
        const token = jwt.sign({id:newUser._id}, process?.env?.JWT_SECRET);
        res
        .cookie('access_token', token, {httpOnly:true, expires:new Date(Date.now() + 24 * 60 * 60 * 1000)})
        .status(200)
        .json({
          id:newUser._id,
          username: newUser.username,
          email: newUser.email,
          avatar:newUser.avatar,
          success:true
        });
      }
  } catch (error:unknown) {
    if(error instanceof Error){
      next(errorHandler(500,error.message));
    }
  }
}