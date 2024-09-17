import { useRouter } from "next/router";
export default function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query); // {slug :['1', '12']}, app라우터 params랑 같음

  return (
    <div>
      <h1>BlogPostsPage</h1>
    </div>
  );
}
