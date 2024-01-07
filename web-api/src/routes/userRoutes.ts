import express, { Router } from "express";
import {
    saveArticle,
    searchArticle,
    deleteSavedArticle,
} from "../controller/userController";
const userRouter = express.Router();

userRouter.route("/search").post(searchArticle);
userRouter.route("/:userId/saved").post(saveArticle).delete(deleteSavedArticle);

export default userRouter;
