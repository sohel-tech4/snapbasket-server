import catchAsync from "../../utils/catchasync";
import sendResponse from "../../utils/sendResponse";
import { AcademciFacultyServices } from "./academicfaculty.service";
import httpStatus from "http-status";

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = AcademciFacultyServices.createAcademicFacultyIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty is created successfully",
    data: result,
  });
});

export const AcademicFacultyController = {
  createAcademicFaculty,
};
