import express from "express";
import { AcademicFacultyController } from "./academicfaculty.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicfacultyValidation } from "./academicfaulty.validation";

const router = express.Router();

router.post(
  "/create-faculty",
  validateRequest(
    AcademicfacultyValidation.createAcademciFacultyValidationSchema
  ),
  AcademicFacultyController.createAcademicFaculty
);

router.get("/", AcademicFacultyController.getAllAcademicFaculty);
router.get("/:facultyId", AcademicFacultyController.getSingleAcademicFaculty);
router.patch(
  "/:facultyId",
  AcademicFacultyController.updateSingleAcademicFaculty
);

export const AcademicFacultyRoutes = router;
