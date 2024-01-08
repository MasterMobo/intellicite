import { Request, Response } from "express";
import { BadRequestError, NotFoundError } from "../../types/errors";
import UserModel, { UserDoc } from "../../models/userSchema";

const deleteSavedArticle = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { article } = req.body;

    if (!userId) {
        throw new BadRequestError("No user ID provided");
    }

    const user: UserDoc | null = await UserModel.findById(userId);
    if (!user) throw new NotFoundError(`Not found user with id ${userId}`);

    // Find article by both id and userQuery
    const articleIndex = user.savedArticles.findIndex(
        (savedArticle) =>
            savedArticle.id === article.id &&
            savedArticle.userQuery === article.userQuery
    );

    if (articleIndex === -1) {
        throw new NotFoundError("No article found");
    }

    // Remove article from array
    user.savedArticles.splice(articleIndex, 1);
    await user.save();

    res.status(200).json({
        message: "Successfully deleted article",
        articles: user.savedArticles,
    });
};

export default deleteSavedArticle;
