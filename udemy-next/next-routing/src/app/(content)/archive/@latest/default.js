// 표시할 기본 폴백 톤텐츠를 정의하도록 허용하는 파일
import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/NewsList";

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>LatestNews</h2>
      <NewsList news={latestNews} />
    </>
  );
}
