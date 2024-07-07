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
