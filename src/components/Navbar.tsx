import { ModeToggle } from "@/components/ModeToggle";
import AddStudentForm from "./students/AddStudentForm";
import Logo from "@/../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container relative flex items-center justify-between">
      <div className="absolute inset-0 bg-blue-500/50 blur-3xl drop-shadow-[0_0_20px_rgba(59,130,246,0.4)] z-0" />
      <div className="relative z-10 flex w-full items-center justify-between">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="RommelTeam"
            width={90}
            height={90}
            priority
            className="cursor-pointer hover:scale-105 duration-150 transition-all hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </Link>
        <div className="flex items-center gap-3">
          <div className="hidden">
            <ModeToggle />
          </div>
          <div className="relative">
            <AddStudentForm />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
