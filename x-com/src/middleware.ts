import { auth } from "@/auth";
import { NextResponse } from "next/server";
//  각 요청이 처리되기 전에 호출
export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}
export const config = {
  // 로그인 후 접근가능한 라우터
  matcher: ["/compose/post", "/home", "/explore", "/messages", "/search"],
};
// ref: https://nextjs.org/docs/pages/building-your-application/routing/middleware#matching-paths
// 특정 페이지에 대한 접근 권한을 관리
