"use client";

import { ReactNode } from "react";
import style from "./post.module.css";
import { useRouter } from "next/navigation";
import { Post as IPost } from "@/model/Post";

type Props = {
  children: ReactNode;
  post: IPost;
};
export default function PostArticle({ children, post }: Props) {
  // article 클릭시 /userid/status/postid로 이동 ,post 상세보기
  const router = useRouter();
  const onClick = () => {
    router.push(`${post.User.id}/status/${post.postId}`);
  };
  return (
    <article className={style.post} onClickCapture={onClick}>
      {children}
    </article>
  );
}
