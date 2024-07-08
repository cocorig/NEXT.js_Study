"use client";

import style from "./logoutButton.module.css";
import UserCard from "../user/UserCard";
import UserImage from "../user/UserImage";

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
      <div className={style.container}>
        <UserImage id={me.id} image={me.image} />
        <div className={style.userName}>
          <span>{me.nickname}</span>
          <span>@{me.id}</span>
        </div>
      </div>
    </button>
  );
}
