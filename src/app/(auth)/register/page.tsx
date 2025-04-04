"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { RegisterFormData } from "@/types";
import { registerSchema } from "@/schema";
import { formVariants } from "@/utils/variants";
import Spinner from "@/components/Spinner";
import { registerAuthAction } from "@/server/_actions/auth.action";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { REGISTER_FORM } from "@/data/forms";
import InputErrorMessage from "../_components/InputErrorMessage";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      registerAuthAction(data).then((res) => {
        if (!res?.success) toast.error(res.message);
        if (res?.success) {
          toast.success(res.message);
          reset();
        }
      });
    } catch (error) {
      console.error("Error", error);
    } finally {
    }
  };

  const renderRegisterForm = REGISTER_FORM.map(
    ({ name, placeholder, type, id, label, validation }, idx) => (
      <div key={idx}>
        <div className="space-y-2 pb-1">
          <label htmlFor={id} className="text-white text-sm">
            {label}
          </label>
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            className="bg-transparent"
            {...register(name, validation)}
          />
        </div>
        {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
      </div>
    )
  );

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/30 blur-3xl drop-shadow-[0_0_20px_rgba(59,130,246,0.7)] z-0" />
      <motion.div
        className="relative z-10 bg-blue-900/50 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Register Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          {renderRegisterForm}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 cursor-pointer ${
              isLoading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isLoading ? <Spinner /> : "Register"}
          </button>
        </form>
        <p className="mt-3 text-left text-gray-300 text-sm">
          Are you Have Account ?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </motion.div>
    </main>
  );
};

export default RegisterPage;
