import ErrorHandler from "../utils/errorHandler.js";
export const errorMiddleware = (err, req, res, next) => {
    let statusCode = 500;
    let message = "Internal Server Error";
    //   console.log("jhkhkhkhkhkh")
    // console.error(err)
    if (err?.name === "PrismaClientKnownRequestError") {
        if (err.code === "P2002") {
            message = `${(err.meta?.target || []).join(", ")} already exists`;
            statusCode = 400;
        }
        if (err.code === "P2025") {
            message = "Record not found";
            statusCode = 404;
        }
    }
    else if (err instanceof ErrorHandler) {
        message = err.message;
        statusCode = err.statusCode || 500;
    }
    return res.status(statusCode).json({ success: false, message, error: err });
};
export const TryCatch = (passedFunc) => async (req, res, next) => {
    try {
        await passedFunc(req, res, next);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=error.js.map