import express from "express";
import levelController from "../controllers/LevelController.js";
const router = express.Router();

router.post("/create", levelController.createLevel);
router.get("/read", levelController.readLevel);
router.put("/update/:id", levelController.updateLevel);
router.delete("/delete/:id", levelController.deleteLevel);

export default router;