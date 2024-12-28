import { UserServices } from "./user.sevice";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchasync";

const createStudent = catchAsync(async (req, res) => {
  const { Password, student: StudentData } = req.body;

  // const zodParseData = StudentValidationSchema.parse(StudentData);
  const result = await UserServices.createStudentIntoDB(Password, StudentData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is created successfully",
    data: result,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
});

export const UserController = {
  createStudent,
};
