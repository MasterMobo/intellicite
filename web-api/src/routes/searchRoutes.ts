import { Router } from "express";
import { searchArticle } from "../controller/userController";

const searchRouter = Router();

searchRouter.route("/").post(searchArticle);

export default searchRouter;
