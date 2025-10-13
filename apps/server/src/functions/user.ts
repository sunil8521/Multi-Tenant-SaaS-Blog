import type { NextFunction, Request, Response } from "express";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/errorHandler.js";
import prisma from "@repo/db/client";

export const getUserProfile = TryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    const userID=req.user?.id


    res.status(200).json({ success: true, data: "req" });
  }
);
