import { NextFunction, Request, Response } from "express";
import { StduentServices } from "./student.service";

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StduentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Stduents are retrived Successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const result = await StduentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "Stduent is retrived Successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studentId } = req.params;
    const result = await StduentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "Stduent is deleted Successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  getStudents,
  getSingleStudent,
  deleteStudent,
};
