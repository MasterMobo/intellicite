import { Schema } from "express-validator";

const userSaveValidator: Schema = {
  articleBody: {
    in: ['body'],
    isLength: {
      options: { min: 1 },
      errorMessage: 'Article body cannot be empty',
    },
  },
};

export default userSaveValidator