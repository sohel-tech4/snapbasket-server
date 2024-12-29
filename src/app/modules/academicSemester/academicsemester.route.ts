import express from "express";
import { academicSemesterConroller } from "./academicsemester.controller";
import validateRequest from "../../middlewares/validateRequest";
import createAcademicSemesterValidationSchema from "./academicsemester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(createAcademicSemesterValidationSchema),
  academicSemesterConroller.createAcademicSemester
);

export const AcademmicSemesterRoutes = router;
