import catchAsync from "../../utils/catchasync";
import sendResponse from "../../utils/sendResponse"
import { AcadmeicDepartmentService } from "./academicdepartment.service"
import httpStatus from "http-status";

const createAcademciDepartment = catchAsync(async(req, res) =>{
    const result = await AcadmeicDepartmentService.createAcademicDepartmentIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department is created successfully",
        data: result,
      });
})

const getAllAcademicDepartment = catchAsync(async(req, res) =>{
    const result = await AcadmeicDepartmentService.getAllDepartmentFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department are retrived successfully",
        data: result,
      });
})

const getSingleAcademicDepartment = catchAsync(async(req, res) =>{
    const {departmentId} = req.params
    const result = await AcadmeicDepartmentService.getSingleDepartmentFromDB(departmentId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department is retrived successfully",
        data: result,
      });
})

const updateAcademciDepartment = catchAsync(async(req, res) =>{
    const {departmentId} = req.params
    const result =  await AcadmeicDepartmentService.updateDepartmentIntoDB(departmentId, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department is updated successfully",
        data: result,
      });
})

export const AcademicDepartmentControl = {
    createAcademciDepartment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
    updateAcademciDepartment
}

