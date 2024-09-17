import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getNewsItem } from "@/lib/news";

export default async function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound(); // 가장가까운 notfound파일 폴백
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={100}
            height={100}
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p> {newsItem.content}</p>
    </article>
  );
}
