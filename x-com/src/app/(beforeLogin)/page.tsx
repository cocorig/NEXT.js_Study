import Main from "@/app/(beforeLogin)/_component/Main";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
// 로그인했을 땐 이 페이지가 뜰 필요가 없다, 그냥 홈페이지로 돌려보내기
export default async function page() {
  const session = await auth(); // useSession의 서버버전
  if (session?.user) {
    redirect("/home");
  }
  return (
    <>
      <Main />
    </>
  );
}
