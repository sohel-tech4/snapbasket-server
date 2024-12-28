import { Schema, model } from "mongoose";
import { TacademicSemester } from "./academicsemester.interface";
import { Months, SemesterCode, SemesterName } from "./academicsemester.const";

const academicSemesterSchema = new Schema<TacademicSemester>(
    {
        name: {
            type: String,
            enum: SemesterName,
            required: true
        },
        code: {
            type: String,
            enum: SemesterCode,
            required: true
        },
        year : {
            type: String,
            required: true,
        },
        startMonth: {
            type: String,
            enum: Months,
            required: true
        }, 
        endMonth: {
            type: String,
            enum: Months,
            required: true
        }
}
)

export const academicsemester = model<TacademicSemester>("Academic-semester", academicSemesterSchema);
