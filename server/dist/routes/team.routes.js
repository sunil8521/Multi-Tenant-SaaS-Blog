import { Router } from "express";
import { CreateTeam, CheckSubdomin } from "../functions/team.js";
const teamRoutes = Router();
teamRoutes.post("/create-team", CreateTeam);
teamRoutes.get("/validate", CheckSubdomin);
export default teamRoutes;
//# sourceMappingURL=team.routes.js.map