import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";

const createStudentIntoDB = async (studentData: TStudent) => {
  //   if (await Student.isUserExists(studentData.id)) {
  //     throw new Error("User Already Exists");
  //   }
  const result = await Student.create(studentData);
  return result;
};

export const UserService = {
  createStudentIntoDB,
};
