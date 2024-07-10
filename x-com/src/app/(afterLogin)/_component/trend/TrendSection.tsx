"use client";
import style from "./trendSection.module.css";
import Trend from "./Trend";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
// 슬래쉬부터 ? 앞까지
export default function TrendSection() {
  const { data: session } = useSession();

  const pathname = usePathname();
  if (pathname === "/explore") return null;

  return (
    <div className={style.trendBg}>
      {session?.user ? (
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
          <Trend />
        </div>
      ) : (
        <div className={style.noTrend}> 트렌드를 가져올 수 없습니다.</div>
      )}
    </div>
  );
}
