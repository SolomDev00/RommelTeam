import { loginSchema, studentSchema } from "@/schema";
import { z } from "zod";

export type TStudentForm = z.infer<typeof studentSchema>;

export type LoginFormData = z.infer<typeof loginSchema>;
