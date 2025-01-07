import { Student } from "./student.model";

const getAllStudentsFromDB = async () => {
  const result = await Student.find().populate("");
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById({ id });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StduentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
