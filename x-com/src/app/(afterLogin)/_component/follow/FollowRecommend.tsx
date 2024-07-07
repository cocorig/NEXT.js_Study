"use client";

import style from "./followRecommend.module.css";
import UserCard from "../user/UserCard";

export default function FollowRecommend() {
  const onFollow = () => {};

  const user = {
    id: "elonmusk",
    nickname: "Elon Musk",
    image: "/profile.jpg",
  };

  return (
    <div className={style.container}>
      <UserCard {...user} />
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
