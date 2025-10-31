import type { Request, Response, NextFunction } from "express";
export declare const calculateReadTime: (content: string) => string;
export declare const CreatePost: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const GetAllPost: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const GetAllTags: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const GetPost: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const GetPostComments: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const GetReplyComments: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const CreatePostComment: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const CreatePostReply: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const UpdatePost: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const DeletePost: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const UploadSinglePicture: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const PresignedUrl: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=post.d.ts.map