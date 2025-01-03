import { TAcademicFaculty } from "./academicfaculty.interface";
import { AcademciFacultyModel } from "./academicfaculty.model";

const createAcademicFacultyIntoDB = async (payLoad: TAcademicFaculty) => {
  const result = await AcademciFacultyModel.create(payLoad);
  return result;
};

const getAllAcademicFacultyFromDB = async () => {
  const result = await AcademciFacultyModel.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (facultyId: string) => {
  const result = await AcademciFacultyModel.findById(facultyId);
  return result;
};

const updateAcademicFacultyIntoDB = async (
  facultyId: string,
  payLoad: Partial<TAcademicFaculty>
) => {
  const result = await AcademciFacultyModel.findOneAndUpdate(
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
