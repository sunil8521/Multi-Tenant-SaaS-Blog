import type { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/errorHandler.js";

export const checkAdmin = (role:string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.role !== role) {
      return next(
        new ErrorHandler(403,"You are not authorized to access this route")
      );
    }
    next();
  };
};