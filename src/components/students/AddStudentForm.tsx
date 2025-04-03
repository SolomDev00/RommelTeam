/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { studentSchema } from "@/schema";
import { createStudentAction } from "@/server/_actions/student.action";
import Spinner from "../Spinner";
import { useState } from "react";
import { Rocket } from "lucide-react";
import { StudentFormData } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import { ProgressBar } from "../ui/progress-bar";
import Logo from "@/../public/images/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

const faculties = [
  "Faculty of AI and Information",
  "Faculty of Engineering",
  "Faculty of Science",
  "Faculty of Medicine",
  "Faculty of Pharmacy",
  "Faculty of Commerce",
  "Faculty of Arts",
];

const departments = [
  "Computer Science",
  "Software Engineering",
  "Artificial Intelligence",
  "Information Security",
  "AI and Robotics",
  "Intelligent Systems",
  "Data Science",
  "Biomedical Engineering",
];

const academicYears = [
  "First Year",
  "Second Year",
  "Third Year",
  "Fourth Year",
  "Fifth Year",
];

const steps = ["Personal Details", "Skills and Technologies"];

const rocketVariants = {
  idle: {
    y: [0, -5, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  },
  hover: {
    y: [-10, 10],
    rotate: [0, 5, -5, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 0.8,
        ease: "easeInOut",
      },
      rotate: {
        repeat: Infinity,
        duration: 0.5,
      },
    },
  },
};

const AddStudentForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const defaultValues: Partial<StudentFormData> = {
    name: "",
    studentId: "",
    address: "",
    email: "",
    faculty: "",
    department: "",
    techStack: "",
    field: "",
    phone: "",
    academicYear: "",
    skills: "",
  };

  const form = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (data: StudentFormData) => {
    setLoading(true);

    try {
      if (currentStep < steps.length - 1) {
        nextStep();
        return;
      }

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      const result = await createStudentAction(null, formData);

      if (result?.success) {
        toast.success(result.message);
        form.reset();
        setOpen(false);
      } else if (result?.errors) {
        Object.entries(result.errors).forEach(([field, messages]) => {
          if (messages && messages.length > 0) {
            form.setError(field as any, {
              type: "server",
              message: messages.join(", "),
            });
          }
        });
      }
    } catch (error) {
      toast.error("Someting Error ( 500 )");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-blue-600/50 border border-blue-500/50 text-blue-300 font-semibold py-3 px-6 rounded-3xl hover:bg-blue-600/40 hover:text-blue-200 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          Join Now!
          <motion.div
            className="relative flex items-center"
            variants={rocketVariants}
          >
            <Rocket size={18} className="text-blue-400" />
          </motion.div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center">
            <Image width={60} src={Logo} alt="Logo" />
            <DialogTitle>Submit on RommelTeam</DialogTitle>
          </div>
          <DialogDescription>
            Please enter the new student&apos;s information in the form below{" "}
          </DialogDescription>
        </DialogHeader>
        <ProgressBar steps={steps} currentStep={currentStep} />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {currentStep === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Eslam Wael ..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="studentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ID</FormLabel>
                      <FormControl>
                        <Input placeholder="8241312" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="solomdev0@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+201014348488" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="faculty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Faculty</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your Faculty" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {faculties.map((faculty) => (
                            <SelectItem key={faculty} value={faculty}>
                              {faculty}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your Department" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept} value={dept}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="academicYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Academic Years</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Academic Year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {academicYears.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="field"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Field</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Web Development, AI, ...etc"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {currentStep === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Dammita, Elmatar Street ..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="techStack"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tech Stack</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="React, Node.js, MongoDB"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skills</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Teamwork, Leadership, ...etc"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            <div className="flex justify-between gap-3 mt-6">
              {currentStep > 0 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="w-full"
                >
                  Before
                </Button>
              ) : (
                <div></div>
              )}
              {currentStep < steps.length - 1 ? (
                <Button type="button" onClick={nextStep} className="w-full">
                  Next
                </Button>
              ) : (
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? (
                    <>
                      <Spinner /> Saving
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStudentForm;
