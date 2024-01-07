import { Schema } from "express-validator";

const loginBodyValidator: Schema = {
  email: {
    in: ['body'],
    isEmail: {
      errorMessage: 'Invalid email address',
    },
  },
  password: {
    in: ['body'],
    isLength: {
      options: { min: 1 },
      errorMessage: 'Password cannot be empty',
    },
  },
};

export default loginBodyValidator