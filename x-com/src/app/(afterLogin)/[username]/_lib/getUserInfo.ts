import { User } from "@/model/User";
import { QueryFunction } from "@tanstack/query-core";
export const getUserInfo: QueryFunction<
  User,
  [_1: string, _2: string]
> = async ({ queryKey }) => {
  const [_1, username] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`,
    { next: { tags: ["user", username] }, cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("유효하지 않는 아이디 입니다.");
  }

  return res.json();
};
