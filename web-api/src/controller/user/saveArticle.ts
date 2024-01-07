import { Request, Response } from "express";
import UserModel, { UserDoc } from "../../models/userSchema";
import { BadRequestError, NotFoundError } from "../../types/errors";

const saveArticle = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { article } = req.body;

    if (!userId) {
        throw new BadRequestError("No user ID provided");
    }

    const user: UserDoc | null = await UserModel.findById(userId);
    if (!user) throw new NotFoundError(`Not found user with id ${userId}`);

    user.savedArticles.push(article);
    await user.save();

    res.status(200).json({
        message: "Successfully saved article",
        articles: user.savedArticles,
    });
};

export default saveArticle;
