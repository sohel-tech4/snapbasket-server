import { Schema, model } from "mongoose";
import { TacademicSemester } from "./academicsemester.interface";
import { Months, SemesterCode, SemesterName } from "./academicsemester.const";

const academicSemesterSchema = new Schema<TacademicSemester>({
  name: {
    type: String,
    enum: SemesterName,
  },
  code: {
    type: String,
    enum: SemesterCode,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    enum: Months,
  },
  endMonth: {
    type: String,
    enum: Months,
  },
});

export const academicsemester = model<TacademicSemester>(
  "academicsemester",
  academicSemesterSchema
);
