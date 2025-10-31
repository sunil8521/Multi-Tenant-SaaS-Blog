import type { NextFunction, Request, Response } from "express";
export declare const getUserProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const inviteUserToTeam: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const verifyInviteToken: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const JoinTeam: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const SignupAndJoinTeam: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=user.d.ts.map