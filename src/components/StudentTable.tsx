import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IStudent } from "@/interfaces";
import StudentTableActions from "./StudentTableActions";

export default function StudentsTable({ students }: { students: IStudent[] }) {
  return (
    <Table>
      <TableCaption>A list of your recent students.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Faculty</TableHead>
          <TableHead>Department</TableHead>
          <TableHead className="text-left">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student?.studentId}>
            <TableCell className="font-medium">{student?.studentId}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.email}</TableCell>
            <TableCell>{student.phone}</TableCell>
            <TableCell>{student.faculty}</TableCell>
            <TableCell>{student.department}</TableCell>
            <TableCell className="w-full flex items-center justify-start gap-2 text-left">
              <StudentTableActions student={student} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={12}>Total</TableCell>
          <TableCell className="text-right">
            {!students.length
              ? "You don't have any students yet!"
              : students.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
