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
import { Badge } from "./ui/badge";
import StudentTableActions from "./StudentTableActions";

export default function StudentsTable({ students }: { students: IStudent[] }) {
  return (
    <Table>
      <TableCaption>A list of your recent todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student?.studentId}>
            <TableCell className="font-medium">{student?.studentId}</TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>
              {student?.phone ? (
                <Badge>Completed</Badge>
              ) : (
                <Badge variant={"secondary"}>Uncompleted</Badge>
              )}
            </TableCell>
            <TableCell className="flex items-center justify-end gap-2 text-right">
              <StudentTableActions student={student} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {!students.length
              ? "You don't have any todos yet!"
              : students.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
