import { Router } from "express";
import {CreateTeam} from "../functions/team.js"
const teamRoutes: Router = Router();

teamRoutes.post("/create-team",CreateTeam)



export default teamRoutes;
