import React from "react";
import Link from "next/link";
import { PenLine, Trash2 } from "lucide-react";
const ButtonAction = () => {
  return (
    <div className="mt-5">
      <Link href="/edit/1" className="btn mr-2">
        <PenLine /> 수정
      </Link>
      <button className="btn btn-error">
        <Trash2 />
        삭제
      </button>
    </div>
  );
};

export default ButtonAction;
