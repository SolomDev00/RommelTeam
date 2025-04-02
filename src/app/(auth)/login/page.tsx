"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { LoginFormData } from "@/types";
import { loginSchema } from "@/schema";
import { formVariants } from "@/utils/variants";
import Spinner from "@/components/Spinner";
import { loginAuthAction } from "@/server/_actions/auth.action";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      loginAuthAction(data);
    } catch (error) {
      console.error("Error", error);
    } finally {
    }
  };

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
          Login Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="mt-1 block w-full px-4 py-2 bg-transparent text-white border border-blue-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Enter your Email ..."
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="mt-1 block w-full px-4 py-2 bg-transparent text-white border border-blue-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Enter your Password ..."
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 cursor-pointer ${
              isLoading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isLoading ? <Spinner /> : "Login"}
          </button>
        </form>
        <p className="mt-3 text-left text-gray-300">
          Don&apos;t Have Account ?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Create new Account
          </a>
        </p>
      </motion.div>
    </main>
  );
};

export default LoginPage;
