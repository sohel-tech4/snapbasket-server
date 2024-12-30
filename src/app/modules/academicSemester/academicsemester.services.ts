import { academiesSemesterNameCodeMapper } from "./academicsemester.const";
import { TacademicSemester } from "./academicsemester.interface";
import { academicsemester } from "./academicsemester.model";

const createAcademicSemesterIntoDB = async (payload: TacademicSemester) => {
  
  if(academiesSemesterNameCodeMapper[payload.name]!== payload.code){
    throw new Error('Invalid Code')
  }

const result = await academicsemester.create(payload);
  console.log(payload);
  return result;
};

const getAllAcademicSemsterFromDB= async() =>{
  const result = await academicsemester.find();
  return result
}

const getSingleAcademicSemesterFromDB = async(id : string) =>{
  const result = await academicsemester.findOne({id : id})
  return result
}

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemsterFromDB,
  getSingleAcademicSemesterFromDB
};
