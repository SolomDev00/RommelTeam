"use server";

import { db } from "@/lib/prisma";
import { loginSchema, registerSchema } from "@/schema";
import { LoginFormData, RegisterFormData } from "@/types";
import * as bcrypt from "bcryptjs";

export const loginAuthAction = async (data: LoginFormData) => {
  const validation = loginSchema.safeParse(data);
  if (!validation.success) {
    return {
      error: validation.error.message[0],
    };
  }
  console.log(data);
  return {
    status: 200,
    sucess: "Logged in Successfully",
  };
};

export const registerAuthAction = async (data: RegisterFormData) => {
  const validation = registerSchema.safeParse(data);
  if (!validation.success) {
    return {
      success: false,
      message: "Invalid credentials",
    };
  }

  const {
    studentId,
    name,
    email,
    phone,
    password,
    academicYear,
    department,
    faculty,
    field,
    address,
  } = validation.data;

  const userId = await db.user.findUnique({ where: { studentId } });
  const userEmail = await db.user.findUnique({ where: { email } });

  if (userId)
    return { success: false, message: "Student ID already registered!" };
  if (userEmail)
    return { success: false, message: "Email already registered!" };

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  await db.user.create({
    data: {
      name,
      email,
      phone,
      academicYear,
      password: hashedPassword,
      department,
      faculty,
      field,
      studentId,
      address,
    },
  });
  return {
    success: true,
    message: "Registered successfully",
  };
};
