"use server";

import { LoginFormData } from "@/types";

export const loginAuthAction = async (data: LoginFormData) => {
  console.log(data);
};
