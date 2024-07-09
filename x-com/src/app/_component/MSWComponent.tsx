"use client";
import { useEffect } from "react";

// 2. Conditionally enable mocking
export const MSWComponent = () => {
  useEffect(() => {
    // window가 존재할 때, 브라우저 일 때 mocks 실행
    if (typeof window !== "undefined") {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
};
//  root layout에 넣어줄 것!
