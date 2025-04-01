"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { studentSchema } from "@/schema";
import { updateStudentAction } from "@/server/_actions/student.action";
import Spinner from "../Spinner";
import { useState } from "react";
import { Pen } from "lucide-react";
import { IStudent } from "@/interfaces";
import { TStudentForm } from "@/types";

const EditTodoForm = ({ student }: { student: IStudent }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const defaultValues: Partial<TStudentForm> = {
    studentId: student.studentId,
    name: student.name,
    email: student.email,
    phone: student.phone,
    address: student.address,
    faculty: student.faculty,
    academicYear: student.academicYear,
    department: student.department,
    field: student.field,
  };

  const form = useForm<TStudentForm>({
    resolver: zodResolver(studentSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async (data: TStudentForm) => {
    setLoading(true);
    await updateStudentAction({
      studentId: data.studentId,
      email: data.email,
      phone: data.phone,
      address: data.address,
      faculty: data.faculty,
      academicYear: data.academicYear,
      department: data.department,
      field: data.field,
      name: data.name,
      skills: [data.skills],
      techStack: [data.skills],
    });
    setLoading(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={"icon"}>
          <Pen size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Go to Collage ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    You can write a short description about your next todo.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="field"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormLabel>Completed</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner /> Saving
                </>
              ) : (
                "Save changes"
              )}
            </Button>
          </form>
        </Form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditTodoForm;
