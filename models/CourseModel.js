import mongoose, { Schema } from "mongoose";

export default mongoose.model(
  "Course",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    level: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "levels",
      required: true,
    },
    skill: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "skills",
      required: true,
    },
  })
);
