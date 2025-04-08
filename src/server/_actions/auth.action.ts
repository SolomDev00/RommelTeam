"use server";

import { db } from "@/lib/prisma";
import { loginSchema, registerSchema } from "@/schema";
import { LoginFormData, RegisterFormData } from "@/types";
import * as bcrypt from "bcryptjs";
import { signIn } from "../auth";
import { AuthError } from "next-auth";

export const loginAuthAction = async (data: LoginFormData) => {
  const validation = loginSchema.safeParse(data);
  if (!validation.success) {
    return {
      error: validation.error.message[0],
    };
  }

  const { email, password } = validation.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/profile" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: false, message: "Invalid email or password!" };
        default:
          return { success: false, message: "Something error." };
      }
    }
  }

  return {
    success: true,
    message: "Logged in Successfully",
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
