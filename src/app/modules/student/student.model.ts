import { Schema, model } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  TStudent,
  StudentModel,
  UserName,
} from "./student.interface";

const UserNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false }, // Optional
  lastName: { type: String, required: true },
});

const GuardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContact: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContact: { type: String, required: true },
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const StudentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "user id must be required"],
      unique: true,
      ref: "User",
    },
    name: { type: UserNameSchema, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: false,
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: GuardianSchema, required: true },
    localGuardian: { type: LocalGuardianSchema, required: true },
    profileImg: { type: String, required: false }, // Optional
    isDeleted: { type: Boolean, default: false },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// virtual
StudentSchema.virtual("fullName").get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// Query Middlewear
StudentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

StudentSchema.pre("findOne", function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});

StudentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

StudentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};
export const Student = model<TStudent, StudentModel>("Student", StudentSchema);
