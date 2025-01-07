import AppError from "../../Errors/AppError";
import { TAcademicFaculty } from "./academicfaculty.interface";
import { model, Schema } from "mongoose";
import httpStatus from "http-status";

const academicFacultySchema = new Schema<TAcademicFaculty>({
  name: {
    type: String,
    unique: true,
  },
});

academicFacultySchema.pre("save", async function (next) {
  const isFacultyExist = await AcademicFacultyModel.findOne({
    name: this.name,
  });
  if (isFacultyExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Faculty already exist");
  }
  next();
});

academicFacultySchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();
  const isFacultyExist = await AcademicFacultyModel.findOne({
    query,
  });
  if (!isFacultyExist) {
    throw new AppError(httpStatus.NOT_FOUND, "This Faculty Does Not exist");
  }
  next();
});

export const AcademicFacultyModel = model<TAcademicFaculty>(
  "AcademicFaculty",
  academicFacultySchema
);
