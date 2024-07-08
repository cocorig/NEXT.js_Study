"use client";

import { ReactNode } from "react";
import style from "./post.module.css";
import { useRouter } from "next/navigation";
//  User: {
//       id: "haha",
//       nickname: "coco",
//       image: "/profile.jpeg",
//     },
//     content: "고양이 구경하고 가세요~",
//     createdAt: new Date(),
//     Images: [],

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    //Todo : Images 타입 변경
    Images: any[];
  };
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
