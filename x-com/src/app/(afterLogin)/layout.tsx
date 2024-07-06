import Link from "next/link";
import Image from "next/image";

import XLogo from "../../../public/x-logo.png";
import styles from "@/app/(afterLogin)/layout.module.css";

import NavMenu from "./_component/NavMenu";
import LogoutButton from "@/app/(afterLogin)/_component/button/LogOutButton";
import TrendSection from "@/app/(afterLogin)/_component/trend/TrendSection";
import FollowSection from "@/app/(afterLogin)/_component/follow/FollowSection";

export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
                게시하기
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
            <div style={{ marginBottom: "60px", width: "inherit" }}>
              <form aria-label="search" role="search" className={styles.search}>
                <svg width={20} viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                  </g>
                </svg>
                <input type="" placeholder="Search" aria-label="search query" />
              </form>
            </div>
            {/* 
Trends for you */}
            <TrendSection />
            {/* 
Who to follow */}
            <FollowSection />
          </section>
        </div>
      </main>
    </div>
  );
}
