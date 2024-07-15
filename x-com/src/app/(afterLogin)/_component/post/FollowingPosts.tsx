"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/post/Post";
import { Post as IPost } from "@/model/Post";
import { queryKeys } from "@/react-query/constants";
import { getFollowingPosts } from "../../home/_lib/getFollowingPosts";
export default function FollowingPosts() {
  const fallback: IPost[] = [];
  const {
    data = fallback,
    isLoading,
    error,
  } = useQuery<IPost[]>({
    queryKey: [queryKeys.posts, queryKeys.followings],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return (
    <>
      {data.map((post) => (
        <Post key={post.postId} post={post} />
      ))}
    </>
  );
}
