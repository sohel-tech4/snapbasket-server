import { TacademicDepartment } from "./academicdepartment.interface"
import { AcademicDepartmentModel } from "./academicdepartment.model"

const createAcademicDepartmentIntoDB = async(payLoad: TacademicDepartment) =>{
    const result = await AcademicDepartmentModel.create(payLoad)
    return result 
}

const getAllDepartmentFromDB = async()=>{
    const result = await AcademicDepartmentModel.find()
    return result
}

const getSingleDepartmentFromDB = async(departmentId : string) =>{
    const result = await AcademicDepartmentModel.findById(departmentId)
    return result
}

const updateDepartmentIntoDB = async(departmentId : string, payLoad : Partial<TacademicDepartment>) =>{
    const result = await AcademicDepartmentModel.findOneAndUpdate(
        {_id : departmentId},
        payLoad,
        {
            new : true
        }
    )
    return result
}

export const AcadmeicDepartmentService = {
    createAcademicDepartmentIntoDB,
    getAllDepartmentFromDB,
    getSingleDepartmentFromDB,
    updateDepartmentIntoDB
}