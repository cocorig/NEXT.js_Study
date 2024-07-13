"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/post/Post";
import { Post as IPost } from "@/model/Post";
import { queryKeys } from "@/react-query/constants";
export default function PostRecommends() {
  const fallback: IPost[] = [];
  const {
    data = fallback,
    isLoading,
    error,
  } = useQuery<IPost[]>({
    queryKey: [queryKeys.posts, queryKeys.recommends],
    staleTime: 60 * 1000, // 1분 동안 fresh-> 서버에서 가져오는게 아니라 캐싱에서 가져옴, 기본 5분
  });

  return (
    <>
      {data.map((post) => (
        <Post key={post.postId} {...post} />
      ))}
    </>
  );
}
