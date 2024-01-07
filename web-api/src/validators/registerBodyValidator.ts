import { Schema } from "express-validator";
import UserModel from "../models/userSchema";
import { UserDoc } from "../models/userSchema";

async function isEmailUnique(email: string): Promise<boolean> {
  const existingUser: UserDoc | null = await UserModel.findOne({ email: email });
  return !existingUser;
}

const registerBodyValidator: Schema = {
  username: {
    in: ['body'],
    isLength: {
      options: { min: 1 },
      errorMessage: 'Username cannot be empty',
    },
  },
  password: {
    in: ['body'],
    isLength: {
      options: { min: 1 },
      errorMessage: 'Password cannot be empty',
    },
  },
  email: {
    in: ['body'],
    isEmail: {
      errorMessage: 'Invalid email address',
    },
    custom: {
      options: async (value: string) => {
        if (!(await isEmailUnique(value))) {
          return Promise.reject('Email is already in use');
        }
        return true;
      },
    },
  },
};

export default registerBodyValidator