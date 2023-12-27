"use client";
import Link from "next/link";
import style from "@/components/Header/header.module.css";
import { useParams, useRouter } from "next/navigation";

export default function Control() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  return (
    <ul>
      {id ? (
        <>
          <li>
            <Link href="/create">추가하러가기</Link>
          </li>
          <li>
            <Link href={`/update/${id}`}>수정하러가기</Link>
          </li>
          <li>
            <input
              type="text"
              value="delete"
              onClick={() => {
                const options = {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                };
                fetch(process.env.NEXT_PUBLIC_API_URL + "topics/" + id, options)
                  .then((res) => res.json())
                  .then((result) => {
                    router.refresh();
                    router.push(`/`);
                  });
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
}
