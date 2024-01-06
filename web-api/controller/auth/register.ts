import { Request, Response } from "express";
import UserModel, { UserDoc } from "../../models/userSchema";
import { generateToken } from "./jwt";
const registerUser = async (req: Request, res: Response) => {
  const {
      username,
      password,
      email,
  } = req.body;
  
  let user: UserDoc | null
  user = new UserModel({
    username: username,
    password: password,
    email: email
  })

  await user.save()

  let userObject = user.toObject()
  delete userObject.password

  const token = generateToken(userObject);
  return res.status(200).json({ user: userObject, token });
};

export default registerUser;