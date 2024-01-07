import { Request, Response } from "express";
import UserModel, { UserDoc } from "../../models/userSchema";
import { generateToken } from "./jwt";
import { validationResult } from "express-validator";
import BadRequestError from "../../types/errors/BadRequestError";

const registerUser = async (req: Request, res: Response) => {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
        throw new BadRequestError("Please provide all fields");
    }

    const user = await UserModel.create({
        username: username,
        password: password,
        email: email,
    });

    // Remove password from returnUser
    const { password: _, ...returnUser } = user.toObject();

    const token = generateToken(returnUser);
    return res.status(200).json({ returnUser, token });
};

export default registerUser;
