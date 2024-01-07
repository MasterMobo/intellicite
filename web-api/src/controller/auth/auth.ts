import { UnauthorizedError } from "../../types/errors";
import { verifyToken } from "./jwt";
import { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new UnauthorizedError("No token provided");

    const token = authHeader.split(" ")[1];

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (err) {
        throw new UnauthorizedError("Invalid token");
    }
};

export default authenticateToken;
