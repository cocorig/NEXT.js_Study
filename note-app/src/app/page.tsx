import { PostCard } from "../components/PostCard";
import { db } from "@/lib/db";
import { Post } from "@prisma/client";

async function getPosts() {
  const response = await db.post.findMany({
    //  가져오고싶은 데이터 값
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response;
}

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
// post 매개 변수와 posts 변수의 타입지정
