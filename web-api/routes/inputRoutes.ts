import express, { Router } from "express"
import { processUserInput } from "../controller/userInputController"

const inputRouter = express.Router()

inputRouter.route("/input").post(processUserInput)