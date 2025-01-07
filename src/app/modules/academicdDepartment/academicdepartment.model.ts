import { model, Schema } from "mongoose";
import { TacademicDepartment } from "./academicdepartment.interface";
import AppError from "../../Errors/AppError";
import httpStatus from "http-status";
const academicDepartmentSchema = new Schema<TacademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicfaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
    },
  },
  {
    timestamps: true,
  }
);

// for create
academicDepartmentSchema.pre("save", async function (next) {
  const isDepartmentExist = await AcademicDepartmentModel.findOne({
    name: this.name,
  });
  if (isDepartmentExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Department already exist");
  }
  next();
});

// for update
academicDepartmentSchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await AcademicDepartmentModel.findOne({ query });
  if (!isDepartmentExist) {
    throw new AppError(httpStatus.NOT_FOUND, "This Department Does not exist");
  }
  next();
});

export const AcademicDepartmentModel = model<TacademicDepartment>(
  "academicDepartment",
  academicDepartmentSchema
);
