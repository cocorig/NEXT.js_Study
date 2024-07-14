import { Hashtag } from "@/model/HashTag";
export const getTrends = async (): Promise<Hashtag[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trends`, {
    next: {
      tags: ["trends"],
    },
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
