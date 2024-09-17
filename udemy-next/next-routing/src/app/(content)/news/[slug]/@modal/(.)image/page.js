import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";
import BackDrop from "@/components/BackDrop";
export default async function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const selectedImage = await getNewsItem(newsItemSlug);
  if (!selectedImage) {
    notFound();
  }

  return (
    <>
      <BackDrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${selectedImage.image}`}
            alt={selectedImage.title}
          />
        </div>
      </dialog>
    </>
  );
}
