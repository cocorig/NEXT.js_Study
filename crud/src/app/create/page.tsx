"use client";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import styles from "@/app/create/create.module.css";
import { useRouter } from "next/navigation"; // app route에선navigation사용 , client에서만 사용

export default function Create(): React.ReactNode {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Body:", body);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };
    fetch(process.env.NEXT_PUBLIC_API_URL + "topics", options)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const lastid = result.id;
        router.refresh(); // 서버컴포넌트가 새로 데이터를 가져오 뿌려줌
        router.push(`/read/${lastid}`);
      });
    setTitle("");
    setBody("");
  };

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setBody(e.target.value);
  };

  return (
    <form className={styles.createForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        name="body"
        placeholder="body"
        value={body}
        onChange={handleBodyChange}
      ></textarea>
      <button>추가하기</button>
    </form>
  );
}

/*push: 새로운 페이지로 이동하고 뒤로 가기를 허용해야 하는 경우
replace: 현재 페이지를 교체하고 이전 페이지로 돌아갈 필요가 없는 경우 */
