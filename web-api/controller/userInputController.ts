import { Request, Response } from "express"
const processUserInput = async (req: Request, res: Response) => {
  const userInput = req.body

  res.status(200).json({
    userInput: userInput
  })
}