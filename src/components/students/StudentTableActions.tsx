"use client";

import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { deleteStudentAction } from "@/server/_actions/student.action";
import Spinner from "../Spinner";
import { useState } from "react";
import EditStudentForm from "./EditStudentForm";
import { IStudent } from "@/interfaces";
import ViewStudent from "./ViewStudent";

const StudentsTableActions = ({ student }: { student: IStudent }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <ViewStudent student={student} />
      <EditStudentForm student={student} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteStudentAction({ studentId: student.studentId });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default StudentsTableActions;
