import { studentSchema } from "@/schema";
import { z } from "zod";

export type TStudentForm = z.infer<typeof studentSchema>;
