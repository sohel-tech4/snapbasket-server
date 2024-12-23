import { z } from "zod";

const UserNameValidationSchema = z.object({
  firstName: z.string(),
  middleName: z.string().default(""),
  lastName: z.string(),
});

const GuardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContact: z.string().regex(/^\+?[0-9]{10,15}$/, {
    message: "Father's contact number must be a valid phone number.",
  }), // Validates phone number
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContact: z.string().regex(/^\+?[0-9]{10,15}$/, {
    message: "Mother's contact number must be a valid phone number.",
  }),
});

const LocalGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string().regex(/^\+?[0-9]{10,15}$/, {
    message: "Local guardian's contact number must be a valid phone number.",
  }),
  address: z.string(),
});

const StudentValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20),
  name: UserNameValidationSchema,
  gender: z.enum(["male", "female"]),
  dateOfBirth: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format. Please provide a valid date.",
  }),
  email: z.string().email({
    message: "Invalid email format. Please provide a valid email address.",
  }),
  contactNo: z.string().regex(/^\+?[0-9]{10,15}$/, {
    message: "Contact number must be a valid phone number.",
  }),
  emergencyContactNo: z.string().regex(/^\+?[0-9]{10,15}$/, {
    message: "Emergency contact number must be a valid phone number.",
  }),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: GuardianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
  profileImg: z.string().url().optional(),
  isActive: z.enum(["active", "inActive"]),
  isDeleted: z.boolean(),
});

export default StudentValidationSchema;
