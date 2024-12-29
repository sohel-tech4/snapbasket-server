import { TacademicSemester } from "./academicsemester.interface";
import { academicsemester } from "./academicsemester.model";

const createAcademicSemesterIntoDB = async (payload: TacademicSemester) => {

  type TacademiesSemesterNameCodeMapper = {
    [Key:string] : string
  }

  const academiesSemesterNameCodeMapper : TacademiesSemesterNameCodeMapper = {
    Autumn : '01',
    Summar : '02',
    Fall : '03'
  }

  if(academiesSemesterNameCodeMapper[payload.name]!== payload.code){
    throw new Error('Invalid Code')
  }

  const result = await academicsemester.create(payload);
  console.log(payload);
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
};
