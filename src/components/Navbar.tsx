import { ModeToggle } from "@/components/ModeToggle";
import AddStudentForm from "./AddStudentForm";
import Logo from "@/../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between">
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="RommelTeam"
          width={90}
          height={90}
          className="cursor-pointer hover:scale-105 duration-150 transition-all"
        />
      </Link>
      <div className="flex items-center gap-3 ">
        <ModeToggle />
        <AddStudentForm />
      </div>
    </nav>
  );
};

export default Navbar;
