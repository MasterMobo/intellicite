import express, { Router } from "express"
import { processUserInput, processUserSave } from "../controller/userController"

const userRouter = express.Router()

userRouter.route("/input").post(processUserInput)
userRouter.route("/input/save/:id").patch(processUserSave)

export default userRouter