import { Request, Response } from "express"
import UserModel, { UserDoc } from "../../models/userSchema"

const processUserSave = async (req: Request, res: Response) => {
  const userId = req.params
  const { articleBody } = req.body

  if (!userId) {
    throw new Error("Invalid user ID")
  }

  const user: UserDoc | null = await UserModel.findOneAndUpdate(
    { _id: req.body.id }, 
    { $push: { savedArticles: articleBody} },
   function (error, success) {
         if (error) {
             console.log(error);
         } else {
             console.log(success);
         }
     });

  res.status(200).json({user})

}

export default processUserSave;