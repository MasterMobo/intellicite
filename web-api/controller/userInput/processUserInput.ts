import { Request, Response } from "express"
import axios from "axios"

const BASE_URL = "http://localhost:5000/api/v1/process"
const processUserInput = async (req: Request, res: Response) => {
  const userInput = req.body
  const response = axios.post(`${BASE_URL}`, userInput)
  res.status(200).json({
    response: response
  })
}

export default processUserInput