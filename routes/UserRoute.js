import express from "express";
import userController from "../controllers/UserController.js";
import verifyToken from "../middleware/Auth.js";
const router = express.Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
router.put("/get_detail_user/:id", userController.getDetailUser);
router.delete("/delete/:id", userController.deleteUser);
router.post("/cart", verifyToken, userController.addToCart);
router.get("/cart", verifyToken, userController.readCart);


export default router;
