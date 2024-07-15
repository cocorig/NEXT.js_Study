"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Post as IPost } from "@/model/Post";
import { getComments } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getComments";
import Post from "@/app/(afterLogin)/_component/post/Post";
import { queryKeys } from "@/react-query/constants";

type Props = {
  id: string;
};
export default function Comments({ id }: Props) {
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["posts", id]);
  const { data, error } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: [queryKeys.posts, id, queryKeys.comments],
    queryFn: getComments,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!post, //게시물이 있을 때만 서버에서 가져오기
  });
  console.log(data);
  if (post) {
    return data?.map((post) => <Post post={post} key={post.postId} />);
  }
  return null;
}
