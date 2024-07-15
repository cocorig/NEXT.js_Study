import Home from "../../home/page";
// 페러렐라우트 할땐 레이아웃 자리 만듬 -> 여긴 모달 뒤에 배경회면을 만듬
import PostModal from "@/app/(afterLogin)/_component/PostModal";
export default function page() {
  return (
    <>
      <Home />
      <PostModal />
    </>
  );
}
