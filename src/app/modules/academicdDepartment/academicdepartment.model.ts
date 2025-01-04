import { model, Schema } from "mongoose";
import { TacademicDepartment } from "./academicdepartment.interface";

const academicDepartmentSchema = new Schema<TacademicDepartment>(
  {
    name: { type: String, required: true, trim: true },
    academicfaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicDepartmentModel = model<TacademicDepartment>(
  "Academicdepartmetn",
  academicDepartmentSchema
);
