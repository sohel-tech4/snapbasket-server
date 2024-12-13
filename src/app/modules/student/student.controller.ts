import { Request, Response } from "express";
import { StduentServices } from "./student.server";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: StudentData } = req.body;
    const result = await StduentServices.createStudentIntoDB(StudentData);
    res.status(200).json({
      success: true,
      message: "Stduent is Created Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
};
