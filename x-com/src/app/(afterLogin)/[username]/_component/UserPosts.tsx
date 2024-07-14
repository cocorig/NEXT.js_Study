"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserPosts } from "../_lib/getUserPosts";
import Post from "@/app/(afterLogin)/_component/post/Post";
import { Post as IPost } from "@/model/Post";
import { queryKeys } from "@/react-query/constants";

type Props = {
  username: string;
};
export default function UserPosts({ username }: Props) {
  const { data } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: [queryKeys.posts, queryKeys.users, username],
    queryFn: getUserPosts,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  const queryClient = useQueryClient();
  // user정보 가져오기
  const user = queryClient.getQueryData([queryKeys.users, username]);
  console.log("user", user);

  if (user) {
    return data?.map((post) => <Post key={post.postId} {...post} />);
  }
  return null;
}
