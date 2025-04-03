import { loginSchema, registerSchema, studentSchema } from "@/schema";
import { z } from "zod";

export type StudentFormData = z.infer<typeof studentSchema>;

export type LoginFormData = z.infer<typeof loginSchema>;

export type RegisterFormData = z.infer<typeof registerSchema>;
