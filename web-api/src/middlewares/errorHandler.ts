import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

import APIError from "../types/errors/APIError";

const errorHandler: ErrorRequestHandler = (
    err: Error | APIError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof APIError) {
        return res.status(err.statusCode).json({ message: err.message });
    }

    const customError = {
        name: err.name || "Error",
        message: err.message || "Something went wrong, please try again later",
        statusCode: 500,
    };

    return res
        .status(customError.statusCode)
        .json({ message: customError.message, error: err });
};

export default errorHandler;
