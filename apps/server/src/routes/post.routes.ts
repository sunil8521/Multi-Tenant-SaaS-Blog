import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {CreatePost,DeletePost,GetAllPost,GetPost, PresignedUrl, UpdatePost,UploadSinglePicture} from "../functions/post.js";
import {multerConfig} from "../middlewares/multer.js"
const postRoutes: Router = Router();

postRoutes.post("/create", authMiddleware,multerConfig.single("featuredImage"), CreatePost);
postRoutes.get("/get/:slug", authMiddleware, GetPost);
postRoutes.put("/update/:slug", authMiddleware, UpdatePost);
postRoutes.delete("/delete/:slug", authMiddleware, DeletePost);
postRoutes.get("/getall/:subDomain", GetAllPost);
postRoutes.post("/presign", authMiddleware, PresignedUrl);

export default postRoutes;