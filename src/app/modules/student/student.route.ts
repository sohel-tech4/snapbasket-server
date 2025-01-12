import express from "express";
import { StudentControllers } from "./student.controller";
import validateRequest from "../../middlewares/validateRequest";
import { studentValidations } from "./student.validation";

const router = express.Router();

router.get("/", StudentControllers.getStudents);

router.get("/:studentId", StudentControllers.getSingleStudent);

router.patch("/:studentId", validateRequest(studentValidations.updateSingleStudentValidationSchema), StudentControllers.updateSingleStudent);

router.delete("/:studentId", StudentControllers.deleteStudent);

export const StudentRoutes = router;
