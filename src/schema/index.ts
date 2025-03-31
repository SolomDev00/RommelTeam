import { z } from "zod";

export const basicInfoSchema = z.object({
  name: z.string().min(2, "يجب أن يكون الاسم مكونًا من حرفين على الأقل"),
  studentId: z
    .string()
    .min(3, "يجب أن يكون رقم القيد مكونًا من 3 أحرف على الأقل"),
  address: z.string().min(5, "يجب أن يكون العنوان مكونًا من 5 أحرف على الأقل"),
  email: z.string().email("يجب إدخال بريد إلكتروني صحيح"),
  faculty: z.string().min(1, "يجب اختيار الكلية"),
  department: z.string().min(1, "يجب اختيار القسم"),
  field: z.string().min(1, "يجب تحديد المجال التخصصي"),
  phone: z.string().min(11, "يجب أن يتكون رقم الهاتف من 11 رقمًا"),
  academicYear: z.string().min(1, "يجب اختيار السنة الدراسية"),
});

export const skillsSchema = z.object({
  techStack: z.string().min(1, "يجب إدخال تقنية واحدة على الأقل"),
  skills: z.string().min(1, "يجب إدخال مهارة واحدة على الأقل"),
});

export const studentSchema = basicInfoSchema.merge(skillsSchema);
