"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import Post from "@/app/(afterLogin)/_component/post/Post";
import { Post as IPost } from "@/model/Post";
import { queryKeys } from "@/react-query/constants";
import { getSinglePost } from "../_lib/getSinglePost";

type Props = {
  id: string;
  noImage?: boolean;
};
export default function SinglePost({ id, noImage }: Props) {
  const {
    data: post,
    isLoading,
    error,
  } = useQuery<IPost, Object, IPost, [_1: string, _2: string]>({
    queryKey: [queryKeys.posts, id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  if (error) {
    return (
      <div
        style={{
          height: 100,
          alignItems: "center",
          fontSize: 31,
          fontWeight: "bold",
          justifyContent: "center",
          display: "flex",
        }}
      >
        게시글을 찾을 수 없습니다.
      </div>
    );
  }
  if (!post) {
    return null;
  }
  return <Post post={post} noImage={noImage} />;
}
