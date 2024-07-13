import { Post } from "@/model/Post";

// 추천 데이터 받기

export async function getPostRecommends(): Promise<Post[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends`,
    {
      // tags가 필요한 이유 서버컴포넌트는 서버에서 받아온 데이터를 기본적으로 저장을한다. 캐싱을 한다.
      // 캐싱을 업데이트할때   구분을 해야하기 때문에 tags옵션이 존재한다.
      // 저장을 안할라면 -> cache:"no-store" 로 설정해야 함,
      next: {
        tags: ["posts", "recommends"],
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
