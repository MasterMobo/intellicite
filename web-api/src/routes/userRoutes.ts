import { Router } from "express";
import {
    saveArticle,
    searchArticle,
    deleteSavedArticle,
    getSavedArticles,
} from "../controller/userController";
const userRouter = Router();

userRouter.route("/search").post(searchArticle);
userRouter
    .route("/:userId/saved")
    .get(getSavedArticles)
    .post(saveArticle)
    .delete(deleteSavedArticle);

export default userRouter;
