import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY;

const generateToken = (data: any) => {
    return jwt.sign(data, JWT_SECRET as string, { expiresIn: JWT_EXPIRY });
};

const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET as string);
};

export { generateToken, verifyToken };
