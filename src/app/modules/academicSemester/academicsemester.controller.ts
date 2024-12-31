import catchAsync from "../../utils/catchasync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { academicSemesterServices } from "./academicsemester.services";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.createAcademicSemesterIntoDB(
    req.body
  );

  console.log(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester is created successfully",
    data: result,
  });
});

const getAllAcademicSemster = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.getAllAcademicSemsterFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semesters are retrived successfully",
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await academicSemesterServices.getSingleAcademicSemesterFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester is retrived successfully",
    data: result,
  });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await academicSemesterServices.updateAcademicSemesterIntoDB(
    id,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester is updated successfully",
    data: result,
  });
});

export const academicSemesterConroller = {
  createAcademicSemester,
  getAllAcademicSemster,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
