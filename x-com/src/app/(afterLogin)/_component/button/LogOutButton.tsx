"use client";

import style from "./logoutButton.module.css";
import UserCard from "../user/UserCard";
import UserImage from "../user/UserImage";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function LogoutButton() {
  const router = useRouter();
  // client에서 내 정보 불러오기
  const { data: session } = useSession();

  /* next auth는 이 속성으로 타입이 고정되어있다.
export interface User {
  id?: string
  name?: string | null
  email?: string | null
  image?: string | null
}
 */
  if (!session?.user) {
    return null;
  }

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace("/");
    });
  };

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.container}>
        <UserImage userId={session.user.id!} userImg={session.user.image!} />
        <div className={style.userName}>
          <span>{session.user.name}</span>
          <span>@{session.user.email}</span>
        </div>
      </div>
    </button>
  );
}
