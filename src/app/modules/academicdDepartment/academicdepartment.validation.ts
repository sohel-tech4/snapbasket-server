import { z } from "zod";

const createAcademciDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    academicfaculty: z.string(),
  }),
});

const updateAcademciDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    academicfaculty: z.string().optional(),
  }),
});

export const AcademicfacultyValidation = {
  createAcademciDepartmentValidationSchema,
  updateAcademciDepartmentValidationSchema,
};
