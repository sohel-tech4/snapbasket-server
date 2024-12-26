import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.sevice";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { Password, student: StudentData } = req.body;

    // const zodParseData = StudentValidationSchema.parse(StudentData);

    const result = await UserServices.createStudentIntoDB(
      Password,
      StudentData
    );
    res.status(200).json({
      success: true,
      message: "Stduent is Created Successfully",
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
