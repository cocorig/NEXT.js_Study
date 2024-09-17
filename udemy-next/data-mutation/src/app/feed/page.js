import Posts from "@/components/Posts";
import { getPosts } from "@/lib/posts";

// 동적 페이지 메타데이터 설정, 비동기 함수여야 함, 반드시 generateMetadata하는 이름을 사용,
export async function generateMetadata(config) {
  console.log(config); // { params: {}, searchParams: {} }
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: `Browse all our ${numberOfPosts} posts.`,
    description: "Browse all our post",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
