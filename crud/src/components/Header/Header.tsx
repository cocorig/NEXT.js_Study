import Link from "next/link";
import style from "@/components/Header/header.module.css";
export default function Header() {
  return (
    <header className={style.container}>
      <h1>
        <Link href="/">여긴 헤더이다~</Link>
      </h1>
    </header>
  );
}
