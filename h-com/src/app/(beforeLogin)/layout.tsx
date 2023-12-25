import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/main.module.css";

type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

// 주소가 localhost:3001일 때는 children->page.tsx, modal->@modal/default.tsx
// 주소가 localhost:3001/i/flow/login 때는 children->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx

// page컴포넌트가 children안으로 들어감, 레이아웃이 페이지를 포함하고있다.
// 로그인 유무에 따른 레이아웃이 다름
// page ->   {children}
// @modal -> {modal}
