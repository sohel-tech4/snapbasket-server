import { TacademicSemester } from "../academicSemester/academicsemester.interface";
import { User } from "./user.model";

const findLastStudentId = async () => {
  const lastStudentId = await User.findOne(
    {
      role: "student",
    },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudentId?.id ? lastStudentId.id : undefined;
};

export const generatedStudentId = async (payLoad: TacademicSemester) => {
  let currentId = (0).toString();

  const lastStudentId = await findLastStudentId();
  // 2025010001
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentYear = lastStudentId?.substring(0, 4);
  const currentStudentCode = payLoad.code;
  const currentStudentYear = payLoad.year;

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentStudentCode &&
    lastStudentYear === currentStudentYear
  ) {
    currentId = lastStudentId.substring(6);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;
  return incrementId;
};
