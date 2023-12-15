import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../utils/errorHandler";

export async function removeAccessToken(req:Request, res:Response, next:NextFunction){
  try {
    res.clearCookie('access_token');
    res.status(200).json({
      success:true
    })
  } catch (error) {
    if(error instanceof Error){
      next(errorHandler(500, error.message))
    }
  }
}