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
import { useState } from "react";
import { Eye } from "lucide-react";
import { IStudent } from "@/interfaces";
import { StudentFormData } from "@/types";

const ViewStudent = ({ student }: { student: IStudent }) => {
  const [open, setOpen] = useState(false);

  const defaultValues: Partial<StudentFormData> = {
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

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={"icon"}>
          <Eye size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <div>Name: {defaultValues.name}</div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewStudent;
