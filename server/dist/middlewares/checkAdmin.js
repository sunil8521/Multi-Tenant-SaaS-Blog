import ErrorHandler from "../utils/errorHandler.js";
export const checkAdmin = (role) => {
    return (req, res, next) => {
        if (req.role !== role) {
            return next(new ErrorHandler(403, "You are not authorized to access this route"));
        }
        next();
    };
};
//# sourceMappingURL=checkAdmin.js.map