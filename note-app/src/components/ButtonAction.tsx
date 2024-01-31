"use client";
import React, { FC } from "react";
import Link from "next/link";
import { PenLine, Trash2 } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";

interface ButtonActionProps {
  id: string;
}

const ButtonAction: FC<ButtonActionProps> = ({ id }) => {
  const router = useRouter();

  const { mutate: deletePost } = useMutation({
    mutationFn: async () => {
      const response = await axios.delete(`/api/posts/${id}`);
      return response.data;
    },
    onError: (err) => {
      console.error(err);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div className="mt-5">
      <Link href={`/edit/${id}`} className="btn mr-2">
        <PenLine /> 수정
      </Link>
      <button onClick={() => deletePost()} className="btn btn-error">
        <Trash2 />
        삭제
      </button>
    </div>
  );
};

export default ButtonAction;
