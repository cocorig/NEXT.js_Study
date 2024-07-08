"use client";

import style from "../search.module.css";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Tab() {
  const [current, setCurrent] = useState("hot");
  const router = useRouter(); // 주소 변경
  const searchParams = useSearchParams(); // 쿼리가져오기
  const onClickHot = () => {
    setCurrent("hot");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };
  const onClickNew = () => {
    setCurrent("new");
    // 현재 searchParams를 그대로 다쓰고, 뒤에 f=live 추가
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === "new"}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === "hot"}></div>
        </div>
      </div>
    </div>
  );
}
// search의 탭은 post의 탭과 다르게 주소가 달라짐 -> 그래서 따로 search탭을 만듬
