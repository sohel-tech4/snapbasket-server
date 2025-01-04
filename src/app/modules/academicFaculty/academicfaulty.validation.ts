import { z } from "zod";

const createAcademciFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});

const updateAcademciFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string(),
  }),
});

export const AcademicfacultyValidation = {
  createAcademciFacultyValidationSchema,
  updateAcademciFacultyValidationSchema,
};
