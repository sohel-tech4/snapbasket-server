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

academicSemesterSchema.pre("save", async function (next) {
  const isSmesterExist = await academicsemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSmesterExist) {
    throw new Error("Semester already exists");
  }
  next();
});

export const academicsemester = model<TacademicSemester>(
  "academicsemester",
  academicSemesterSchema
);
