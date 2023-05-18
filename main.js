import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import connectDB from "./database/Database.js";
import courseRouter from "./routes/CourseRoute.js";
import levelRouter from "./routes/LevelRoute.js";
import skillRouter from "./routes/SkillRoute.js";
import userRouter from "./routes/UserRoute.js";
import couponRouter from "./routes/CouponRoute.js";
import cartRouter from "./routes/CartRoute.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Port
app.listen(port, async () => {
  console.log("Listening on port: " + port);
});

//MongoDB
connectDB();

//Routes
app.use("/course", courseRouter);
app.use("/level", levelRouter);
app.use("/skill", skillRouter);
app.use("/user", userRouter);
app.use("/coupon", couponRouter);
app.use("/cart", cartRouter);
