import React from "react";
import Link from "next/link";
import { Cat, SquarePen } from "lucide-react";
const Navbar = () => {
  return (
    <div className="navbar bg-neutral-100">
      <div className="container">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" href={"/"}>
            <Cat /> Note
          </Link>
        </div>
        <div className="flex-none">
          <Link className="btn btn-ghost text-xl" href={"/create"}>
            <SquarePen />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
