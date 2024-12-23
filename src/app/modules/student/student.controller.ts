import { Request, Response } from "express";
import { StduentServices } from "./student.service";
import StudentValidationSchema from "./student.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: StudentData } = req.body;

    const zodParseData = StudentValidationSchema.parse(StudentData);

    const result = await StduentServices.createStudentIntoDB(zodParseData);
    res.status(200).json({
      success: true,
      message: "Stduent is Created Successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await StduentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Stduents are retrived Successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StduentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "Stduent is retrived Successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StduentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "Stduent is deleted Successfully",
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getStudents,
  getSingleStudent,
  deleteStudent,
};
