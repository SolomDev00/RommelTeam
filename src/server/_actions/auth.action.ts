"use server";

import { loginSchema, registerSchema } from "@/schema";
import { LoginFormData, RegisterFormData } from "@/types";

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
      error: validation.error.message[0],
    };
  }
  console.log(data);
  return {
    status: 200,
    sucess: "Submit in Successfully",
  };
};
