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
    .sort()
    .lean();

  return lastStudentId?.id ? lastStudentId.id.substring(6) : undefined;
};

export const generatedStudentId = async (payLoad: TacademicSemester) => {
  const currentId = (await findLastStudentId()) || (0).toString();
  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;
  return incrementId;
};
