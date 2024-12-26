import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (Password, studentData: TStudent) => {
  //   if (await Student.isUserExists(studentData.id)) {
  //     throw new Error("User Already Exists");
  //   }

  const userData: Partial<TUser> = {};

  //create user
  userData.id = "20230510";
  userData.password = Password || (config.default_pass as string);
  userData.role = "student";

  const newUser = await User.create(userData);

  //create student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);

    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
