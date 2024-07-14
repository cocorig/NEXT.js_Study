"use client";
import style from "./followSection.module.css";
import FollowRecommend from "./FollowRecommend";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/react-query/constants";
import { getFollowRecommends } from "@/app/(afterLogin)/_lib/getfollowRecommends";
import { User } from "@/model/User";
export default function FollowSection() {
  const fallback: User[] = [];
  const { data = fallback } = useQuery<User[]>({
    queryKey: [queryKeys.users, queryKeys.followRecommend],
    queryFn: getFollowRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return (
    <div className={style.followRecommend}>
      <h3>팔로우 추천</h3>
      {data.map((user) => (
        <FollowRecommend user={user} key={user.id} />
      ))}
    </div>
  );
}
