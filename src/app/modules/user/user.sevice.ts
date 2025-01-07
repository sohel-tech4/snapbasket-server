import mongoose from "mongoose";
import config from "../../config";
import AppError from "../../Errors/AppError";
import { academicsemester } from "../academicSemester/academicsemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generatedStudentId } from "./user.utils";
import httpStatus from "http-status";
const createStudentIntoDB = async (Password, payLoad: TStudent) => {
  if (await Student.isUserExists(payLoad.id)) {
    throw new AppError(httpStatus.NOT_FOUND, "User Already Exists");
  }

  const userData: Partial<TUser> = {};
  userData.role = "student";
  userData.password = Password || (config.default_pass as string);

  const academicSemester = await academicsemester.findById(
    payLoad.academicSemester
  );
  if (!academicSemester) {
    throw new AppError(httpStatus.NOT_FOUND, "Invalid Academic Semester");
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //Set Generated Id
    userData.id = await generatedStudentId(academicSemester);

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_Request, "Faild to create user");
    }

    //create student
    if (newUser.length) {
      payLoad.id = newUser[0].id;
      payLoad.user = newUser[0]._id;

      const newStudent = await Student.create([payLoad], { session });
      if (!newStudent.length) {
        throw new AppError(httpStatus.BAD_Request, "Faild to create Student");
      }

      await session.commitTransaction();
      await session.endSession();

      return newStudent;
    }
  } catch (Err) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const UserServices = {
  createStudentIntoDB,
};
