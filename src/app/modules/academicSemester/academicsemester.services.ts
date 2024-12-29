import { TacademicSemester } from "./academicsemester.interface";
import { academicsemester } from "./academicsemester.model";

const createAcademicSemesterIntoDB = async (payload: TacademicSemester) => {
  const result = await academicsemester.create(payload);
  console.log(payload);
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
};
