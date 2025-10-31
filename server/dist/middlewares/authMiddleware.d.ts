import type { NextFunction, Request, Response } from "express";
export interface TUser {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image?: string | null | undefined;
    createdAt: Date;
    updatedAt: Date;
    jobTitle?: string | null | undefined;
}
declare global {
    namespace Express {
        interface Request {
            user?: TUser | null;
            role?: string;
            teamId?: string;
            subdomain?: string;
            teamName?: string;
        }
    }
}
export declare const authMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=authMiddleware.d.ts.map