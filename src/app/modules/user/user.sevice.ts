import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";

const createStudentIntoDB = async (Password, studentData: TStudent) => {
  //   if (await Student.isUserExists(studentData.id)) {
  //     throw new Error("User Already Exists");
  //   }

  const userData: Partial<TUser> = {};

  //create user
  userData.id = "20230510";
  userData.password = Password || (config.default_pass as string);
  userData.role = "student";

  const result = await Student.create(userData);

  //create student
  if (Object.keys(result).length) {
    studentData.id = result.id;
    studentData.user = result._id;
  }

  return result;
};

export const UserServices = {
  createStudentIntoDB,
};
