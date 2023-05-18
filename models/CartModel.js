import mongoose, { Schema } from "mongoose";

export default mongoose.model(
  "Cart",
  new Schema(
    {
      courses: [
        {
          course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "courses",
            required: true,
          },
        },
      ],
      coupon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coupons",
        required: false,
      },
      cartTotal: Number,
      totalAfterDiscount: Number,
      orderBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
);
