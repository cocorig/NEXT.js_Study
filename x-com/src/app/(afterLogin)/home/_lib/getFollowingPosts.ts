import { Post } from "@/model/Post";

export async function getFollowingPosts(): Promise<Post[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/followingPosts`,
    {
      next: {
        tags: ["posts", "followings"],
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
