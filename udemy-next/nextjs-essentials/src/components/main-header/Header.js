import Link from "next/link";
import Image from "next/image";

import classes from "./header.module.css";
import logoImg from "@/assets/logo.png";

import HeaderBackground from "./HeaderBackground";
import NavLink from "./NavLink";

export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}> Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}> Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
