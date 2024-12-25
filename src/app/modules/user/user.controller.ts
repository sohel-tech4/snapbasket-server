import { UserService } from "./user.sevice";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { Password, student: StudentData } = req.body;

    // const zodParseData = StudentValidationSchema.parse(StudentData);

    const result = await UserService.createStudentIntoDB(Password, StudentData);
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

export const UserController = {
  createStudent,
};
