import express, { Router } from "express";
import { loginUser, registerUser } from "../controller/authController";
import { checkSchema } from "express-validator";
import { loginBodyValidator, registerBodyValidator } from "../validators";
const authRouter = express.Router();

authRouter.route("/login").post(loginUser);
authRouter.route("/register").post(registerUser);

export default authRouter;
