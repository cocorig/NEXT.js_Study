"use client";

import { useRouter } from "next/navigation"; //클라이언트에서 네비게이션
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />; // 여기서 메인화면을 보여줘야 layout의  {children}으로 들어가고 /i/flow/login 이동해서 모달컴포넌트를 보여준다 {modal}
}
// 전에 서버쪽에선 리다이렉트
// 클라이언트에선 replace, push
// router.push
// http://localhost:3000 ->  http://localhost:3000/login -> http://localhost:3000/i/flow/login

//router.replace , 히스토리 삭제
// http://localhost:3000/ -> http://localhost:3000/i/flow/login
