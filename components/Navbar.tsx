import Link from "next/link";
import {
  FaMountainSun,
  FaUserPlus,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import { Archivo_Black } from "next/font/google";

import "@/styles/navbar.css";

const Archivo = Archivo_Black({ weight: "400", subsets: ["latin"] });

export const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        {/* <Link className={`${Archivo.className} nav-brand`} href="/">
          <FaMountainSun />
          Vertex
        </Link> */}
        <div className="nav-links">
          <Link className="link" href="/">
            Home
          </Link>
          <Link className="link" href="/">
            Topics
          </Link>
          <Link className="link" href="/">
            Profile
          </Link>
          <Link className="link" href="/">
            Contact
          </Link>
        </div>
        <div className="nav-auth">
          <Link className="link" href="/register">
            Register
            <FaUserPlus />
          </Link>
          <Link className="button" href="/login">
            Login
            <FaArrowRightToBracket />
          </Link>
        </div>
      </nav>
    </header>
  );
};
