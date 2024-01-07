import { Request, Response } from "express";
import axios from "axios";
import env from "../../config/env";
const { SEARCH_SERVICE_IP } = env;

const searchArticle = async (req: Request, res: Response) => {
    const { userInput } = req.body;
    const response = await axios.post(`http://${SEARCH_SERVICE_IP}:5000`, {
        user_input: userInput,
    });

    return res.status(200).json({
        ...response.data,
    });
};

export default searchArticle;
