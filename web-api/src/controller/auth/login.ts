import { Request, Response } from "express";
import { generateToken } from "./jwt";
import UserModel from "../../models/userSchema";
import {
    BadRequestError,
    NotFoundError,
    UnauthorizedError,
} from "../../types/errors";

const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError("Please provide all fields");
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
        throw new NotFoundError("User not found");
    }
    const validPassword = await user.comparePassword(password);

    if (!validPassword) {
        throw new UnauthorizedError("Invalid password");
    }

    // Remove password field from response
    const { password: _, ...userObject } = user.toObject();

    // Generate JWT
    const token = generateToken(userObject);

    return res.status(200).json({
        message: "Login successful",
        user: userObject,
        token,
    });
};

export default loginUser;
