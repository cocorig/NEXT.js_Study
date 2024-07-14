"use client";

import style from "./followRecommend.module.css";
import UserCard from "../user/UserCard";
import { User } from "@/model/User";

interface Props {
  user: User;
}
export default function FollowRecommend({ user }: Props) {
  const onFollow = () => {};

  return (
    <div className={style.container}>
      <UserCard {...user} />
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
