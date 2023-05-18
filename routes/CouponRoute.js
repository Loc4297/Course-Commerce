import express from "express";
import couponController from "../controllers/CouponController.js";
const router = express.Router();

router.post("/create", couponController.createCoupon);

export default router;