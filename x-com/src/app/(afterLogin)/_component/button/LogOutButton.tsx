"use client";

import style from "./logoutButton.module.css";
import UserCard from "../UserCard";

export default function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "ha_ye0ni",
    nickname: "이하연",
    image: "/profile.jpeg",
  };

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <UserCard {...me} />
    </button>
  );
}
