import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";

export default function Header() {
  /* 객체가 반환된다. 빌드 프로세스,개발 서버에서 이미 처리된 이미지 경로를 보내준다.
{
  src: '/_next/static/media/logo.6ad4479c.png',
  height: 600,
  width: 600,
  blurDataURL: '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6ad4479c.png&w=8&q=70',
  blurWidth: 8,
  blurHeight: 8
}
   */
  return (
    <header id="main-header">
      <Link href="/">
        <Image
          src={logo}
          alt="Mobile phone with posts feed on it"
          sizes="20vw"
          priority
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          <li>
            <Link className="cta-link" href="/new-post">
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
