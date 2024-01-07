import { verifyToken } from "./jwt";
import { Request, Response, NextFunction } from "express";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error("No token provided");
    const token = authHeader.split(" ")[1];
    try {
        const decoded = verifyToken(token);
        return res.status(200).json({ user: decoded });
    } catch (err) {
        throw new Error("Invalid token");
    }
};

export default authenticateToken