"use client";

import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { deleteAllStudentsAction } from "@/server/_actions/student.action";

const DeleteAllStudent = () => {
  return (
    <Button
      size={"icon"}
      variant={"destructive"}
      onClick={async () => {
        await deleteAllStudentsAction();
      }}
    >
      <Trash size={16} />
    </Button>
  );
};

export default DeleteAllStudent;
