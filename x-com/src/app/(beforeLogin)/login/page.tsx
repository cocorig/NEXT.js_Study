import { redirect } from "next/navigation";

export default function Login() {
  redirect("i/flow/login");
}
// 클라이언트 경로 라우팅 -> useRouter()
// 서버에서 리다이렉트 -> redirect()
// router.push :  localhost:3000 ->  localhost:3000/login ->  localhost:3000/i/flow/login
// router.replace :  localhost:3000 -> localhost:3000/i/flow/login
