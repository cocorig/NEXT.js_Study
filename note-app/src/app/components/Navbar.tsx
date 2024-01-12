import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar bg-neutral-100">
      <div className="container">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" href={"/"}>
            Note
          </Link>
        </div>
        <div className="flex-none">
          <Link className="btn btn-ghost text-xl" href={"/create"}>
            +
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
