import { Router } from "express";
import { getUserProfile } from "../functions/user.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const userRoutes: Router = Router();

userRoutes.get("/profile", authMiddleware, getUserProfile);


export default userRoutes;
