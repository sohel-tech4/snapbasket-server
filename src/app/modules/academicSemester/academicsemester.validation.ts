import { z } from "zod";
import { SemesterCode, Months, SemesterName } from "./academicsemester.const";

const createAcademicSemesterValidationSchema = z.object({
  name: z.enum([...SemesterName] as [string, ...string[]]),
  code: z.enum([...SemesterCode] as [string, ...string[]]),
  year: z.string(),
  startMonth: z.enum([...Months] as [string, ...string[]]),
  endMonth: z.enum([...Months] as [string, ...string[]]),
});

export default createAcademicSemesterValidationSchema;
