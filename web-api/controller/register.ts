import { Request, Response } from "express";
import UserModel, { UserDoc } from "../models/userSchema";
import { generateToken } from "./auth/jwt";
const registerUser = async (req: Request, res: Response) => {
  const {
      username,
      password,
      email,
  } = req.body;

  let user: UserDoc
  user = new UserModel({
    userName: username,
    password,
    email
  })

  await user.save()

  let userObject = user.toObject()
  delete userObject.password

  const token = generateToken(userObject);
  return res.status(200).json({ user: userObject, token });
};

export default registerUser;