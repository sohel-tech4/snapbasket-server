import express from "express"
import { AcademicDepartmentControl } from "./academicdepartment.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicfacultyValidation } from "./academicdepartment.validation";
const router = express.Router();

router.post("/create-department", validateRequest(AcademicfacultyValidation.createAcademciDepartmentValidationSchema), AcademicDepartmentControl.createAcademciDepartment)

router.get("/", AcademicDepartmentControl.getAllAcademicDepartment)

router.get("/:departmentId", AcademicDepartmentControl.getSingleAcademicDepartment)

router.patch("/:departmentId", AcademicDepartmentControl.updateAcademciDepartment)

export const AcademicDepartmentRoutes = router;
