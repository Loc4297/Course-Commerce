import mongoose, { Schema } from "mongoose";

export default mongoose.model(
  "Coupon",
  new Schema({
    name: {
      type: String,
      required: true,
      uppercase: true,
    },
    expiry: {
      type: Date,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
  })
);
