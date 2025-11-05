import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {CreatePost,DeleteMyPost,GetMyPost,GetAllPost,GetPost, PresignedUrl, UpdateMyPost,GetAllTags, GetPostComments,CreatePostComment,CreatePostReply,GetReplyComments,toggleBookmark} from "../functions/post.js";
// import {multerConfig} from "../middlewares/multer.js"
const postRoutes: Router = Router();

postRoutes.post("/create", authMiddleware, CreatePost);
postRoutes.put("/update/:slug", authMiddleware, UpdateMyPost);
postRoutes.delete("/delete/:slug", authMiddleware, DeleteMyPost);
postRoutes.get("/get-my", authMiddleware, GetMyPost);

postRoutes.get("/getall/:subDomain", GetAllPost);
postRoutes.get("/get/:subDomain/:slug", GetPost);
postRoutes.get("/get-tags/:subDomain", GetAllTags);
    
postRoutes.get("/get-comments/:postId", GetPostComments); //get comments for a post
postRoutes.get("/get-replies/:postId/:commentId", GetReplyComments); //get replies for a comment

postRoutes.post("/add-comments/:postId", CreatePostComment); //add comment to a post
postRoutes.post("/add-replies/:postId/:commentId", CreatePostReply); //add reply to a comment

postRoutes.post("/presign", authMiddleware, PresignedUrl); //generate presigned url for s3 upload
postRoutes.post("/bookmark-post", toggleBookmark, ); //generate presigned url for s3 upload
postRoutes.post("/like-post", authMiddleware, PresignedUrl); //generate presigned url for s3 upload



export default postRoutes;