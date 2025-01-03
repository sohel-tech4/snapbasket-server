import { TAcademicFaculty } from "./academicfaculty.interface";
import { model, Schema } from "mongoose";

const academicFacultySchema = new Schema<TAcademicFaculty>({
  name: {
    type: String,
    unique: true,
  },
});

export const AcademciFacultyModel = model<TAcademicFaculty>(
  "Academicfaculty",
  academicFacultySchema
);
