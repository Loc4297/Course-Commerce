import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const login = async ({ email, password }) => {
  let user = await User.findOne({ email }).exec();
  if (user) {
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return "Email/Password is incorrect";
    } else {
      let token = jwt.sign(
        {
          data: user,
        },
        process.env.JWT_SECRET
        // {
        //   expiresIn: "60s",
        // }
      );
      return {
        ...user.toObject(),
        token: token,
      };
    }
  }
};

const register = async ({ name, email, password, phone }) => {
  try {
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return "Email already in use";
    } else {
      const hashedPassword = await bcrypt.hash(
        password,
        parseInt(process.env.SALT_ROUNDS)
      );
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        phone,
      });
      return newUser;
    }
  } catch (error) {
    return error;
  }
};

export default {
  login,
  register,
};
