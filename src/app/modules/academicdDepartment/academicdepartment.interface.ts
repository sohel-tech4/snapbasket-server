import { Types } from "mongoose";

export type TacademicDepartment = {
  name: string;
  academicfaculty: Types.ObjectId;
};
