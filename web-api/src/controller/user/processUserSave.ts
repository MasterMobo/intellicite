import { Request, Response } from "express"
import UserModel, { UserDoc } from "../../models/userSchema"
import { validationResult } from "express-validator";

const processUserSave = async (req: Request, res: Response) => {
  // Run validator check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const { userId } = req.params
  const { articleBody } = req.body

  if (!userId) {
    throw new Error("Invalid user ID")
  }

  const user: UserDoc | null = await UserModel.findById(userId);
  if (!user) throw new Error(`Not found user with id ${userId}`)

  user.savedArticles = [...user.savedArticles, articleBody]
  
  user.markModified("savedArticles")
  await user.save()

  res.status(200).json({user})

}

export default processUserSave;