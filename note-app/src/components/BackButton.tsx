"use client";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
const BackButton = () => {
  const router = useRouter();
  return (
    <button className="btn" onClick={() => router.back()}>
      <ChevronLeft />
      뒤로가기
    </button>
  );
};

export default BackButton;
