import express from "express";
import cartController from "../controllers/CartController.js";
import verifyToken from "../middleware/Auth.js";
const router = express.Router();

router.post("/create", verifyToken, cartController.addToCart);
// router.delete("/delete/:id", userController.deleteUser);

export default router;
