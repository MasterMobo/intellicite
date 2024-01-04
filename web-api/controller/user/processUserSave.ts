import { Request, Response } from "express"
import UserModel, { UserDoc } from "../../models/userSchema"

const processUserSave = async (req: Request, res: Response) => {
  const userId = req.params

  if (!userId) {
    throw new Error("Invalid user ID")
  }

  const user: UserDoc | null = await UserModel.findById(userId)

  if (!user) {
    throw new Error(`User with ID: ${userId} does not exist!`)
  }

  let articleBody: string = req.body
  user.savedArticles.push(articleBody)
  await user.save()
  res.status(200).json({user})

}

export default processUserSave;