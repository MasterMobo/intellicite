import { Request, Response } from "express";
import { generateToken, verifyToken } from "./jwt";
import UserModel, { UserDoc } from "../../models/userSchema";
import { validationResult } from "express-validator";

const loginUser = async (req: Request, res: Response) => {
    // Run validator check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    let user: UserDoc | null

    user = await UserModel.findOne({ email })
    if (!user) {
      throw new Error("User not found");
    }
    const validPassword = await user.comparePassword(password);

    if (!validPassword) {
        throw new Error("Invalid password");
    }

    // Remove password field from response
    const userObject = user.toObject();
    delete userObject.password;

    // Generate JWT
    const token = generateToken(userObject);

    return res.status(200).json({
        message: "Login successful",
        user: userObject,
        token,
    });
};

export default loginUser;
