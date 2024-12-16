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
<<<<<<< HEAD
    message: "Father's contact number must be a valid phone number.",
=======
    message: "Father's contact number must be a valid phone number."
>>>>>>> 3cb324bdb1ac4f933bb7fdd60439ca2e5dc2813d
  }), // Validates phone number
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContact: z.string().regex(/^\+?[0-9]{10,15}$/, {
<<<<<<< HEAD
    message: "Mother's contact number must be a valid phone number.",
=======
    message: "Mother's contact number must be a valid phone number."
>>>>>>> 3cb324bdb1ac4f933bb7fdd60439ca2e5dc2813d
  }),
});

const LocalGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string().regex(/^\+?[0-9]{10,15}$/, {
<<<<<<< HEAD
    message: "Local guardian's contact number must be a valid phone number.",
=======
    message: "Local guardian's contact number must be a valid phone number."
>>>>>>> 3cb324bdb1ac4f933bb7fdd60439ca2e5dc2813d
  }),
  address: z.string(),
});

const StudentValidationSchema = z.object({
  id: z.string(),
  name: UserNameValidationSchema,
  gender: z.enum(["male", "female"]),
  dateOfBirth: z.string().refine((date) => !isNaN(Date.parse(date)), {
<<<<<<< HEAD
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
=======
    message: "Invalid date format. Please provide a valid date."
  }),
  email: z.string().email({
    message: "Invalid email format. Please provide a valid email address."
  }),
  contactNo: z.string().regex(/^\+?[0-9]{10,15}$/, {
    message: "Contact number must be a valid phone number."
  }),
  emergencyContactNo: z.string().regex(/^\+?[0-9]{10,15}$/, {
    message: "Emergency contact number must be a valid phone number."
  }),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
>>>>>>> 3cb324bdb1ac4f933bb7fdd60439ca2e5dc2813d
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: GuardianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
<<<<<<< HEAD
  profileImg: z.string().url().optional(),
  isActive: z.enum(["active", "inActive"]),
});

export default StudentValidationSchema;
=======
  profileImg: z.string().url().optional().refine((url) => length > 0, {
    message: "Profile image URL must be a valid and non-empty string."
  }),
  isActive: z.enum(["active", "inActive"]),
});

export default StudentValidationSchema
>>>>>>> 3cb324bdb1ac4f933bb7fdd60439ca2e5dc2813d
