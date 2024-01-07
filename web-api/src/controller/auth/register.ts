import { Request, Response } from "express";
import UserModel, { UserDoc } from "../../models/userSchema";
import { generateToken } from "./jwt";
import { validationResult } from "express-validator"
const registerUser = async (req: Request, res: Response) => {
  // Run validator check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
      username,
      password,
      email,
  } = req.body;
  
  let user: UserDoc | null
  user = await UserModel.create({
    username: username,
    password: password,
    email: email
  })

  let userObject = user.toObject()
  delete userObject.password

  const token = generateToken(userObject);
  return res.status(200).json({ user: userObject, token });
};

export default registerUser;