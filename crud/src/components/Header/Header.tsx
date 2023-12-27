import Link from "next/link";
import style from "@/components/Header/header.module.css";
export default function Header() {
  return (
    <header className={style.container}>
      <h1>
        <Link href="/">여긴 헤더이다~</Link>
      </h1>
      <ol>
        <li>
          <Link href="/read/1">html</Link>
        </li>
        <li>
          <Link href="/read/2">css</Link>
        </li>
      </ol>
      <ul>
        <li>
          <Link href="/create">추가</Link>
        </li>
        <li>
          <Link href="/update">수정</Link>
        </li>
        <li>
          <input type="button" value="delate" />
        </li>
      </ul>
    </header>
  );
}
