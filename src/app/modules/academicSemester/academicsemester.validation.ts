import { z } from "zod";
import { SemesterCode, Months, SemesterName } from "./academicsemester.const";

const AcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...SemesterName] as [string, ...string[]]),
    code: z.enum([...SemesterCode] as [string, ...string[]]),
    year: z.string(),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});

const UpdateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...SemesterName] as [string, ...string[]]).optional(),
    code: z.enum([...SemesterCode] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    startMonth: z.enum([...Months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...Months] as [string, ...string[]]).optional(),
  }),
});

export const AcademicSemesterValidation = {
  AcademicSemesterValidationSchema,
  UpdateAcademicSemesterValidationSchema,
};
