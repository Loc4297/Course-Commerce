import express from "express";
import courseController from "../controllers/CourseController.js";
import verifyToken from "../middleware/Auth.js";
const router = express.Router();

router.post("/create", courseController.createCourse);
router.get("/read", courseController.readCourse);
router.put("/update/:id", courseController.updateCourse);
router.get("/delete/:id", courseController.deleteCourse);

export default router;
