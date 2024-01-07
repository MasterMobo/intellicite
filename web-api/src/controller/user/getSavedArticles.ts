import { Request, Response } from "express";
import { BadRequestError, NotFoundError } from "../../types/errors";
import UserModel, { UserDoc } from "../../models/userSchema";

const getSavedArticles = async (req: Request, res: Response) => {
    const { userId } = req.params;

    if (!userId) {
        throw new BadRequestError("No user ID provided");
    }

    const user: UserDoc | null = await UserModel.findById(userId);
    if (!user) throw new NotFoundError(`Not found user with id ${userId}`);

    res.status(200).json({
        articles: user.savedArticles,
    });
};

export default getSavedArticles;
