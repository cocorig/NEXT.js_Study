import Link from "next/link";
import Image from "next/image";

import XLogo from "../../../public/x-logo.png";
import styles from "@/app/(afterLogin)/layout.module.css";

import NavMenu from "./_component/NavMenu";
import LogoutButton from "@/app/(afterLogin)/_component/button/LogOutButton";
import TrendSection from "@/app/(afterLogin)/_component/trend/TrendSection";
import FollowSection from "@/app/(afterLogin)/_component/follow/FollowSection";
import RightSearchZone from "./_component/RightSearchZone";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {/* left */}
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}>
            <h1 role="heading">
              <Link
                href={"/home"}
                className={styles.logo}
                role="link"
                aria-label="X"
              >
                <div className={styles.logoPill}>
                  <Image src={XLogo} alt="x.com 로고" width={50} height={50} />
                </div>
              </Link>
            </h1>
            <div className={styles.leftNavBar}>
              <nav>
                <ul>
                  <NavMenu />
                </ul>
              </nav>
              <Link href={"/compose/post"} className={styles.postButton}>
                <span>게시하기</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                  </g>
                </svg>
              </Link>
            </div>
            {/* 맨 아래로 밀려나게 */}
            <LogoutButton />
          </div>
        </section>
      </header>
      {/* right */}
      <main className={styles.rightMainWrapper}>
        <div className={styles.rightMainInner}>
          {/* main */}
          <div className={styles.rightSectionLeft}>{children}</div>
          <section className={styles.rightSectionRight}>
            {/* search */}
            <RightSearchZone />
            {/* 
Trends for you */}
            <TrendSection />
            {/* 
Who to follow */}
            <FollowSection />
          </section>
        </div>
      </main>
      {modal}
    </div>
  );
}

// home일땐 children엔 <Home/>, modal엔 default
// compose/post 일땐  children엔 <Home/>, modal엔 @modal/compose/post
// children에 compose/post/page.tsx가 들어가면 안됌
// 새로고침땐 children엔 compose/post/page.tsx, modal엔 default
