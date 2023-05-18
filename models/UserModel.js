import mongoose, { Schema, ObjectId } from "mongoose";
import isEmail from "../node_modules/validator/lib/isEmail.js";
export default mongoose.model(
  "User",
  new Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: (value) => value.length > 3,
            message: 'Username must be at least 3 characters'
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => isEmail,
            message: 'Email is incorrect format'
        }
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: (value) => value.length == 10,
            message: 'Phone number must be equal 10 numbers'
        }
    },
    cart: {
        type: Array,
        ref: "carts",
        required: false,
    },
  })
);
