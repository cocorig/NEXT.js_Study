"use client";

import Trend from "@/app/(afterLogin)/_component/trend/Trend";
import { useQuery } from "@tanstack/react-query";
import { Hashtag } from "@/model/HashTag";
import { queryKeys } from "@/react-query/constants";
import { getTrends } from "../../_lib/getTrends";

export default function TrendSection() {
  const fallback: Hashtag[] = [];
  // 쿼리 재사용하기 -> 쿼리 키가 값으면 리액트 쿼리는 캐시된 데이터를 재사용
  const { data = fallback } = useQuery<Hashtag[]>({
    queryKey: [queryKeys.trends],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return data.map((trend) => <Trend key={trend.tagId} {...trend} />);
}
