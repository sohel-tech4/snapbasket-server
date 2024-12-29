import catchAsync from "../../utils/catchasync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { academicSemesterServices } from "./academicsemester.services";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.createAcademicSemesterIntoDB(
    req.body
  );

  console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester is created successfully",
    data: result,
  });
});

export const academicSemesterConroller = {
  createAcademicSemester,
};
