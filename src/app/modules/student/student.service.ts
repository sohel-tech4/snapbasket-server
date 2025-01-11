import mongoose from "mongoose";
import { Student } from "./student.model";
import AppError from "../../Errors/AppError";
import httpStatus from "http-status";
import { User } from "../user/user.model";

const getAllStudentsFromDB = async () => {
  const result = await Student.find()
    .populate("academicSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicfaculty",
      },
    });
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
    .populate("academicSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicfaculty",
      },
    });
  return result;
};

const updateSingleStudentIntoDB = async(id: string) =>{

}

const deleteStudentFromDB = async (id: string) => {

// Check User in DB

const isExistUser = await Student.findById(id)

 const session = await mongoose.startSession();
  try {
    await session.startTransaction();
    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_Request, "Faild to delete student");
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_Request, "Faild to delete User");
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    console.log(error);
  }
};

export const StduentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  updateSingleStudentIntoDB,
  deleteStudentFromDB,
};
