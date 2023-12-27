import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h2 className={styles.home}>여긴 홈page.tsx이당</h2>
    </>
  );
}

// app폴더 밑에 해당 경로의 폴더를 찾는다 -> 그 폴더가 page.tsx가 있는지 찾는다.-> 이 내용을 해당 경로 폴더안에 layout.tsx가 있으면 거기에 {children}에 들어가서 결합을 하고 없으면 제일 최상단의 layout.tsx  {children}에 들어감
