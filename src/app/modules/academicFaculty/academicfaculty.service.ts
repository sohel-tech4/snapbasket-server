import { TAcademicFaculty } from "./academicfaculty.interface";
import { AcademicFacultyModel } from "./academicfaculty.model";

const createAcademicFacultyIntoDB = async (payLoad: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payLoad);
  return result;
};

const getAllAcademicFacultyFromDB = async () => {
  const result = await AcademicFacultyModel.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (facultyId: string) => {
  const result = await AcademicFacultyModel.findById(facultyId);
  return result;
};

const updateAcademicFacultyIntoDB = async (
  facultyId: string,
  payLoad: Partial<TAcademicFaculty>
) => {
  const result = await AcademicFacultyModel.findOneAndUpdate(
    { _id: facultyId },
    payLoad,
    {
      new: true,
    }
  );
  return result;
};

export const AcademciFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultyFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
};
