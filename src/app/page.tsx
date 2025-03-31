import AddStudentForm from "@/components/AddStudentForm";
import StudentsTable from "@/components/StudentTable";
import { getAllStudentsAction } from "@/server/_actions/student.action";

export default async function Home() {
  const students = await getAllStudentsAction();

  return (
    <main className="container">
      <div className="mx-auto flex w-full flex-col justify-center space-y-4 mt-10">
        <AddStudentForm />
        <StudentsTable students={students} />
      </div>
    </main>
  );
}
