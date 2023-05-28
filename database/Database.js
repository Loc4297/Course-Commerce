import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  console.log(
    "🚀 ~ file: Database.js:16 ~ connectDB ~ connectDB:",
    process.env.MONGO_URI
  );

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
