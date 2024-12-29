import { TacademicSemester } from "./academicsemester.interface";
import { academicsemester } from "./academicsemester.model";

const createAcademicSemesterIntoDB = async (payload: TacademicSemester) => {
  const result = await academicsemester.create(payload);
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
};
