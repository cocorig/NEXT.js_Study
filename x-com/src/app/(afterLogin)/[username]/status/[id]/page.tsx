import BackButton from "@/app/(afterLogin)/_component/button/BackButton";
import style from "./singlePost.module.css";
import Post from "@/app/(afterLogin)/_component/post/Post";
import CommentForm from "../../_component/CommentForm";
import SinglePost from "./_component/SinglePost";

type Props = {
  params: { id: string };
};
export default function page({ params }: Props) {
  const { id } = params;
  console.log(id);
  return (
    <div className={style.main}>
      {/* Todo: header 컴포넌트-fixed */}
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>게시하기</h3>
      </div>
      <SinglePost id={id} />
      <CommentForm />
      {/* 댓글섹션 */}
      <div>
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </div>
    </div>
  );
}
