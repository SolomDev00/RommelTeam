export interface IRegisterInput {
  id: string;
  name:
    | "name"
    | "studentId"
    | "email"
    | "phone"
    | "academicYear"
    | "field"
    | "department"
    | "address"
    | "faculty"
    | "password"
    | "confirmPassword";
  placeholder: string;
  type: string;
  label: string;
  validation?: {
    pattern?: RegExp;
    required?: boolean;
    minLength?: number;
  };
}

export interface ILoginInput {
  id: string;
  name: "email" | "password";
  placeholder: string;
  type: string;
  label: string;
  validation: {
    pattern?: RegExp;
    required?: boolean;
    minLength?: number;
  };
}
