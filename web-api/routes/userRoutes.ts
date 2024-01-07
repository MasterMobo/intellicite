import express, { Router } from "express"
import { processUserInput, processUserSave } from "../controller/userController"
import { checkSchema } from "express-validator"
import { userSaveValidator } from "../validators"
const userRouter = express.Router()

userRouter.route("/input").post(processUserInput)
userRouter.route("/input/save/:id").put(checkSchema(userSaveValidator),processUserSave)

export default userRouter