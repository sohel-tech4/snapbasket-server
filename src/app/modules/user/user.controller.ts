import { RequestHandler } from "express";
import { UserServices } from "./user.sevice";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { Password, student: StudentData } = req.body;

    // const zodParseData = StudentValidationSchema.parse(StudentData);
    const result = await UserServices.createStudentIntoDB(
      Password,
      StudentData
    );
    // res.status(200).json({
    //   success: true,
    //   message: "Stduent is Created Successfully",
    //   data: result,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student is created successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createStudent,
};
