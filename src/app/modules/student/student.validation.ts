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

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
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
      academicSemester: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

const updateSingleStudentValidationSchema = z.object({
  body: z.object({
    student: z
      .object({
        name: UserNameValidationSchema.partial(),
        gender: z.enum(["male", "female"]).optional(),
        dateOfBirth: z
          .string()
          .refine((date) => !isNaN(Date.parse(date)), {
            message: "Invalid date format. Please provide a valid date.",
          })
          .optional(),
        email: z
          .string()
          .email({
            message: "Invalid email format. Please provide a valid email address.",
          })
          .optional(),
        contactNo: z
          .string()
          .regex(/^\+?[0-9]{10,15}$/, {
            message: "Contact number must be a valid phone number.",
          })
          .optional(),
        emergencyContactNo: z
          .string()
          .regex(/^\+?[0-9]{10,15}$/, {
            message: "Emergency contact number must be a valid phone number.",
          })
          .optional(),
        bloodGroup: z
          .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
          .optional(),
        presentAddress: z.string().optional(),
        permanentAddress: z.string().optional(),
        guardian: GuardianValidationSchema.partial().optional(),
        localGuardian: LocalGuardianValidationSchema.partial().optional(),
        profileImg: z.string().url().optional(),
        academicSemester: z.string().optional(),
        academicDepartment: z.string().optional(),
      })
      .partial(), // Allow partial updates
  }),
});


export const studentValidations = {
  createStudentValidationSchema,
  updateSingleStudentValidationSchema  
};
