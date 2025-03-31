/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IStudent } from "@/interfaces";
import { db } from "@/lib/prisma";
import { studentSchema } from "@/schema";
import { revalidatePath } from "next/cache";

export const getAllStudentsAction = async (): Promise<IStudent[]> => {
  try {
    return await db.student.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error: any) {
    throw new Error(`Something went wrong ${error.message}`);
  }
};

export const createStudentAction = async (
  pervState: null,
  formData: FormData
) => {
  const rawData = {
    name: formData.get("name"),
    studentId: formData.get("studentId"),
    address: formData.get("address"),
    email: formData.get("email"),
    faculty: formData.get("faculty"),
    department: formData.get("department"),
    techStack: formData.get("techStack"),
    field: formData.get("field"),
    phone: formData.get("phone"),
    academicYear: formData.get("academicYear"),
    skills: formData.get("skills"),
  };

  const validation = studentSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      message: "البيانات غير صالحة",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  try {
    const studentId = formData.get("studentId") as string;

    const existingStudent = await db.student.findUnique({
      where: { studentId },
    });

    if (existingStudent) {
      return {
        success: false,
        message: "الطالب مسجل بالفعل",
      };
    }

    const data = {
      ...validation.data,
      skills: [validation.data.skills],
      techStack: [validation.data.techStack],
    };

    await db.student.create({ data });
    revalidatePath("/");

    return {
      success: true,
      message: "تم تسجيل الطالب بنجاح!",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "حدث خطأ أثناء محاولة تسجيل الطالب",
    };
  }
};

export const updateStudentAction = async ({
  studentId,
  email,
  phone,
  address,
  faculty,
}: IStudent): Promise<void> => {
  try {
    await db.student.update({
      where: {
        studentId,
      },
      data: {
        email,
        phone,
        address,
        faculty,
      },
    });

    revalidatePath("/");
  } catch (error: any) {
    throw new Error(`Something went wrong ${error.message}`);
  }
};

export const deleteStudentAction = async ({
  studentId,
}: {
  studentId: string;
}): Promise<void> => {
  try {
    await db.student.delete({
      where: {
        studentId,
      },
    });
    revalidatePath("/");
  } catch (error: any) {
    throw new Error(`Something went wrong ${error.message}`);
  }
};

export const deleteAllStudentsAction = async (): Promise<{ count: number }> => {
  try {
    const result = await db.student.deleteMany({});
    revalidatePath("/");
    return result;
  } catch (error) {
    throw error;
  }
};
