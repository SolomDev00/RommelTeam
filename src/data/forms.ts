import { ILoginInput, IRegisterInput } from "@/interfaces/forms";

export const REGISTER_FORM: IRegisterInput[] = [
  {
    id: "name",
    name: "name",
    placeholder: "Type your Full Name ..",
    type: "text",
    label: "Full Name",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    id: "studentId",
    name: "studentId",
    placeholder: "Type your Student ID ..",
    type: "number",
    label: "Student ID",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    id: "email",
    name: "email",
    placeholder: "Type your Email ..",
    type: "email",
    label: "Email",
    validation: {
      required: true,
      pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
    },
  },
  {
    id: "address",
    name: "address",
    placeholder: "Type your Address ..",
    type: "text",
    label: "Address",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    id: "faculty",
    name: "faculty",
    placeholder: "Type your Faculty ..",
    type: "text",
    label: "Faculty",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    id: "department",
    name: "department",
    placeholder: "Type your Department ..",
    type: "text",
    label: "Department",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    id: "field",
    name: "field",
    placeholder: "Type your Field ..",
    type: "text",
    label: "Field",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    id: "academicYear",
    name: "academicYear",
    placeholder: "Type your Academic Year ..",
    type: "text",
    label: "Academic Year",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    id: "phone",
    name: "phone",
    placeholder: "Type your Phone number ..",
    type: "number",
    label: "Phone Number",
    validation: {
      required: true,
      minLength: 11,
    },
  },
  {
    id: "password",
    name: "password",
    placeholder: "Type your Password ..",
    type: "password",
    label: "Password",
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
    label: "Password Confirmation",
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
