import { QueryFunction } from "@tanstack/query-core";
import { Post } from "@/model/Post";

export const getSearchResult: QueryFunction<
  Post[], // 쿼리 함수가 반환하는 데이터 타입
  [_1: string, _2: string, searchParams: { q: string; pf?: string; f?: string }] // 쿼리 키 타입
> = async ({ queryKey }) => {
  const [_1, _2, searchParams] = queryKey;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/search/${
      searchParams.q
    }?${searchParams.toString()}`,
    {
      next: {
        // next캐싱,객체가 들어갈 수 없다.
        tags: ["posts", "search", searchParams.q],
      },
      credentials: "include",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
