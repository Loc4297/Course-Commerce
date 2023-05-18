import express from "express";
import skillController from "../controllers/SkillController.js";
const router = express.Router();

router.post("/create", skillController.createSkill);
router.get("/read", skillController.readSkill);
router.put("/update/:id", skillController.updateSkill);
router.delete("/delete/:id", skillController.deleteSkill);

export default router;