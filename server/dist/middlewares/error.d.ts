import type { NextFunction, Request, Response } from "express";
export declare const errorMiddleware: (err: any, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
type ControllerType = (req: Request, res: Response, next: NextFunction) => Promise<void | Response<unknown, Record<string, unknown>>>;
export declare const TryCatch: (passedFunc: ControllerType) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
//# sourceMappingURL=error.d.ts.map