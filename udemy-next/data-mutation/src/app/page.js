import { Suspense } from "react";

import Posts from "@/components/Posts";
import { getPosts } from "@/lib/posts";

// 정적 페이지 메타데이터 설정

export const metadata = {
  title: "Latest Posts",
  description: "Browse  our latest post ",
};

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
