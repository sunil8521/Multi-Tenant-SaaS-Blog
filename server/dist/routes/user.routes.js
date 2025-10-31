import { Router } from "express";
import { getUserProfile, inviteUserToTeam, verifyInviteToken, JoinTeam, SignupAndJoinTeam } from "../functions/user.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const userRoutes = Router();
import { checkAdmin } from "../middlewares/checkAdmin.js";
userRoutes.get("/profile", authMiddleware, getUserProfile);
userRoutes.post("/invite", authMiddleware, checkAdmin("ADMIN"), inviteUserToTeam);
userRoutes.post("/verify", verifyInviteToken);
userRoutes.post("/join", JoinTeam);
userRoutes.post("/signup-join", SignupAndJoinTeam);
export default userRoutes;
//# sourceMappingURL=user.routes.js.map