import { Post } from "@/model/Post";

export async function getPostRecommends({
  pageParam = 0,
}: {
  pageParam?: number;
}): Promise<Post[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends?cursor=${pageParam}`,
    {
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
