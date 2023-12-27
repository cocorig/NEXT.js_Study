// 이 페이지는 사용자와 상호작용하는가 ? , 데이터를 받아서 출력할 뿐 -> 서버 컴포넌트로 간주
import Link from "next/link";
import Control from "@/components/Control/Control";
interface ReadProps {
  params: {
    id: string;
  };
}

export default async function Read(props: ReadProps) {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}topics/${props.params.id}`,
    {
      cache: "no-cache",
    }
  );
  const topics = await resp.json();
  return (
    <>
      <h1 className="a11y-hidden">읽기</h1>
      <p>{topics.body}</p>
      <Control />
    </>
  );
}
