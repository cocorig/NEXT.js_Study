import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

export default async function ImagePage({ params }) {
  // console.log(params); // { slug: 'will-ai-replace-humans' }
  const newsItemSlug = params.slug;
  const selectedImage = await getNewsItem(newsItemSlug);
  if (!selectedImage) {
    notFound(); // 가장가까운 notfound파일 폴백
  }

  return (
    <div className="fullscreen-image">
      <img
        src={`/images/news/${selectedImage.image}`}
        alt={selectedImage.title}
      />
    </div>
  );
}
