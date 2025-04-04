import { z } from "zod";

export const basicInfoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  studentId: z.string().min(5, "Student ID must be at least 5 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  email: z.string().email("Please enter a valid email address"),
  faculty: z.string().min(1, "Please select a faculty"),
  department: z.string().min(1, "Please select a department"),
  field: z.string().min(1, "Please specify your field of specialization"),
  phone: z.string().min(11, "Phone number must be 11 digits"),
  academicYear: z.string().min(1, "Please select academic year"),
});

export const skillsSchema = z.object({
  techStack: z.string().min(1, "Please enter at least one technology"),
  skills: z.string().min(1, "Please enter at least one skill"),
});

export const studentSchema = basicInfoSchema.merge(skillsSchema);

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters"),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().min(11, "Phone number must be 11 digits"),
    studentId: z.string().min(5, "Student ID must be at least 5 characters"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    address: z.string().min(5, "Address must be at least 5 characters"),
    faculty: z.string().min(1, "Please select a faculty"),
    department: z.string().min(1, "Please select a department"),
    field: z.string().min(1, "Please specify your field of specialization"),
    academicYear: z.string().min(1, "Please select academic year"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must not exceed 20 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
