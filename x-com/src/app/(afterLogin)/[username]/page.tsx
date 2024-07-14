import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import style from "./profile.module.css";

import { getUserInfo } from "./_lib/getUserInfo";
import { getUserPosts } from "./_lib/getUserPosts";
import { queryKeys } from "@/react-query/constants";

import UserInfo from "./_component/UserInfo";
import UserPosts from "./_component/UserPosts";

// 유효하지 않는 아이디일 때
type Props = {
  params: { username: string };
};
export default async function Profile({ params }: Props) {
  const { username } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [queryKeys.users, username],
    queryFn: getUserInfo,
  });
  await queryClient.prefetchQuery({
    queryKey: [queryKeys.posts, queryKeys.users, username],
    queryFn: getUserPosts,
  });
  const dehydrateState = dehydrate(queryClient);

  // url params 가져오기
  // 1. 유저 정보가져오기,
  // 2. 유저 게시물 가져오기
  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydrateState}>
        <UserInfo username={username} />
        <UserPosts username={username} />
      </HydrationBoundary>
    </main>
  );
}
