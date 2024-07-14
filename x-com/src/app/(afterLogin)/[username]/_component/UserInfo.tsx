"use client";
import { useQuery } from "@tanstack/react-query";
import BackButton from "../../_component/button/BackButton";
import style from "../profile.module.css";
import { User } from "@/model/User";
import { queryKeys } from "@/react-query/constants";
import { getUserInfo } from "../_lib/getUserInfo";

type Props = {
  username: string;
};

export default function UserInfo({ username }: Props) {
  const {
    data: user,
    error,
    isLoading,
  } = useQuery<User, Object, User, [_1: string, _2: string]>({
    queryKey: [queryKeys.users, username],
    queryFn: getUserInfo,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  console.dir(error);

  if (error) {
    return (
      <>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>프로필</h3>
        </div>
        <div className={style.userNotFoundZone}>
          <div className={style.userImage}>
            <div className={style.notFoundImg}></div>
          </div>
          <div className={style.notFoundUserName}>@{username}</div>
        </div>
        <div className={style.accountNotFound}>Account suspended</div>
      </>
    );
  }
  if (!user) {
    return null;
  }

  return (
    <>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
    </>
  );
}
