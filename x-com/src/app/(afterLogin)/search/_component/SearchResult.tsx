"use client";
import { useQuery } from "@tanstack/react-query";
import { searchParamsProps } from "../page";
import { Post as IPost } from "@/model/Post";
import { getSearchResult } from "../_lib/getSearchResult";
import Post from "../../_component/post/Post";
import { queryKeys } from "@/react-query/constants";

export default function SearchResult({ searchParams }: searchParamsProps) {
  console.log(searchParams);
  const { data } = useQuery<
    IPost[], // 성공 시 반환되는 데이터 타입
    Object, // 에러 타입
    IPost[], // select나 transform 후의 데이터 타입
    [_1: string, _2: string, searchParamsProps["searchParams"]] // 쿼리 키 타입
  >({
    queryKey: [queryKeys.posts, queryKeys.search, searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
