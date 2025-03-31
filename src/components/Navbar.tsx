import { ModeToggle } from "@/components/ModeToggle";
import AddStudentForm from "./AddStudentForm";

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between pt-5">
      <ModeToggle />
      <AddStudentForm />
    </nav>
  );
};

export default Navbar;
