"use client";
import style from "./trendSection.module.css";
import Trend from "./Trend";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getTrends } from "@/app/(afterLogin)/_lib/getTrends";
import { Hashtag } from "@/model/HashTag";
import { queryKeys } from "@/react-query/constants";

// 슬래쉬부터 ? 앞까지
export default function TrendSection() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const fallback: Hashtag[] = [];
  // 로그인을 했을 때만 서버의 데이터를 가져오도록 !!
  const { data = fallback } = useQuery<Hashtag[]>({
    queryKey: [queryKeys.trends],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!session?.user, // user의 데이터가 있을 경우에만 서버의 데이터를 가져오도록 설정
  });

  if (pathname === "/explore") return null;

  return (
    <div className={style.trendBg}>
      {session?.user ? (
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          {data.map((trend) => (
            <Trend key={trend.tagId} {...trend} />
          ))}
        </div>
      ) : (
        <div className={style.noTrend}> 트렌드를 가져올 수 없습니다.</div>
      )}
    </div>
  );
}
