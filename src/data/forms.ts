import { ILoginInput, IRegisterInput } from "@/interfaces/forms";

export const REGISTER_FORM: IRegisterInput[] = [
  {
    id: "username",
    name: "name",
    placeholder: "Type your Sender Name ..",
    type: "text",
    label: "Sender Name :",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    id: "email",
    name: "email",
    placeholder: "Type your Email ..",
    type: "email",
    label: "Email :",
    validation: {
      required: true,
      pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
    },
  },
  {
    id: "name",
    name: "phone",
    placeholder: "Type your Phone number ..",
    type: "text",
    label: "Phone :",
  },
  {
    id: "password",
    name: "password",
    placeholder: "Type your Password ..",
    type: "password",
    label: "Password :",
    validation: {
      required: true,
      minLength: 6,
    },
  },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    placeholder: "Type your password Confirmation ..",
    type: "password",
    label: "Password Confirmation :",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];

export const LOGIN_FORM: ILoginInput[] = [
  {
    id: "email",
    name: "email",
    placeholder: "Type your Email ..",
    type: "email",
    label: "Email :",
    validation: {
      required: true,
      pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
    },
  },
  {
    id: "password",
    name: "password",
    placeholder: "Enter your Password ..",
    type: "password",
    label: "Password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];
