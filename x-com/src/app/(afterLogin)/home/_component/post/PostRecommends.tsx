"use client";

import {
  InfiniteData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/post/Post";
import { Post as IPost } from "@/model/Post";
import { queryKeys } from "@/react-query/constants";
import { getPostRecommends } from "../../_lib/getPostRecommends";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function PostRecommends() {
  const { data, isLoading, isFetching, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery<
      IPost[],
      Object,
      InfiniteData<IPost[]>,
      [string, string],
      number
    >({
      queryKey: [queryKeys.posts, queryKeys.recommends],
      queryFn: getPostRecommends,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
      staleTime: 60 * 1000,
      gcTime: 300 * 1000,
    });
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} style={{ height: 50 }} />
    </>
  );
}
