import type { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/errorHandler.js";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Internal Server Error";
//   console.log("jhkhkhkhkhkh")
// console.error(err)
  if (err?.name === "PrismaClientKnownRequestError") {
    if (err.code === "P2002") {
      message = `${(err.meta?.target || []).join(", ")} already exists`;
      statusCode = 400;
    }
    if (err.code === "P2025") {
      message = "Record not found";
      statusCode = 404;
    }
  } else if (err instanceof ErrorHandler) {
    message = err.message;
    statusCode = err.statusCode || 500;
  }

  return res.status(statusCode).json({ success: false, message,error:err });
};

type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void | Response<unknown, Record<string, unknown>>>;

export const TryCatch =
  (passedFunc: ControllerType) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await passedFunc(req, res, next);
    } catch (error) {
      next(error);
    }
  };
