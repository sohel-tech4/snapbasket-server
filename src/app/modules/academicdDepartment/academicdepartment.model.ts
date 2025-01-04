import { model, Schema } from "mongoose";
import { TacademicDepartment } from "./academicdepartment.interface";

const academicDepartmentSchema = new Schema<TacademicDepartment>(
  {
    name: { 
      type: String, 
      required: true, 
      unique: true 
    },
    academicfaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// for create
academicDepartmentSchema.pre("save", async function(next){
const isDepartmentExist = await AcademicDepartmentModel.findOne({
  name: this.name
})
if(isDepartmentExist){
  throw new Error("Department already exist")
}
next()
})

// for update
academicDepartmentSchema.pre("findOneAndUpdate", async function(next){
const query = this.getQuery()
const isDepartmentExist = await AcademicDepartmentModel.findOne({query
})
if(!isDepartmentExist){
  throw new Error("This Department Does not exist")
}
next()
})


export const AcademicDepartmentModel = model<TacademicDepartment>(
  "Academicdepartmetn",
  academicDepartmentSchema
);
