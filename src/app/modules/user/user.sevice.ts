import config from "../../config";
import { academicsemester } from "../academicSemester/academicsemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generatedStudentId } from "./user.utils";

const createStudentIntoDB = async (Password, payLoad: TStudent) => {
  if (await Student.isUserExists(payLoad.id)) {
    throw new Error("User Already Exists");
  }

  const userData: Partial<TUser> = {};

  const academicSemester = await academicsemester.findById(
    payLoad.academicSemester
  );
  if (!academicSemester) {
    throw new Error("Invalid Academic Semester");
  }

  //create user
  userData.id = await generatedStudentId(academicSemester);
  userData.password = Password || (config.default_pass as string);
  userData.role = "student";

  const newUser = await User.create(userData);

  //create student
  if (Object.keys(newUser).length) {
    payLoad.id = newUser.id;
    payLoad.user = newUser._id;

    const newStudent = await Student.create(payLoad);

    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
