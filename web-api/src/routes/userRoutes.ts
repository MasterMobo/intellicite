import { Router } from "express";
import {
    saveArticle,
    deleteSavedArticle,
    getSavedArticles,
} from "../controller/userController";
const userRouter = Router();

userRouter
    .route("/:userId/saved")
    .get(getSavedArticles)
    .post(saveArticle)
    .delete(deleteSavedArticle);

export default userRouter;
