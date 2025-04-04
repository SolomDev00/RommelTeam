import DeleteAllStudent from "@/components/students/DeleteAllStudent";
import StudentsTable from "@/components/students/StudentTable";
import { getAllStudentsAction } from "@/server/_actions/student.action";

export default async function Students() {
  const students = await getAllStudentsAction();

  return (
    <main className="container">
      <div className="mx-auto flex w-full flex-col justify-center space-y-4 mt-10">
        <div className="hidden">
          <DeleteAllStudent />
        </div>
        <StudentsTable students={students} />
      </div>
    </main>
  );
}
