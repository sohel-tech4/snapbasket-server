import express from "express";
import { academicSemesterConroller } from "./academicsemester.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterValidation } from "./academicsemester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(AcademicSemesterValidation.AcademicSemesterValidationSchema),
  academicSemesterConroller.createAcademicSemester
);

export const AcademmicSemesterRoutes = router;
