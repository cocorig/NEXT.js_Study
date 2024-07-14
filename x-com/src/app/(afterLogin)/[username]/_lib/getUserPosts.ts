import { QueryFunction } from "@tanstack/query-core";
import { Post } from "@/model/Post";
export const getUserPosts: QueryFunction<
  Post[],
  [_1: string, _2: string, username: string]
> = async ({ queryKey }) => {
  const [_1, _2, username] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}/posts`,
    { next: { tags: ["user", "posts", username] }, cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
