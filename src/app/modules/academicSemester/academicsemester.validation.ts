import { z } from "zod";
import { SemesterCode, SemesterName, Months } from "./academicsemester.const";

export const academicSemesterSchema = z.object({
  name: z.enum(SemesterName), 
  code: z.enum(SemesterCode), 
  year: z.string().refine((val) => /^\d{4}$/.test(val), {
    message: "Year must be a valid 4-digit year",
  }), 
  startMonth: z.enum(Months), 
  endMonth: z.enum(Months), 
});

// Type inference from Zod schema
export type AcademicSemesterInput = z.infer<typeof academicSemesterSchema>;
