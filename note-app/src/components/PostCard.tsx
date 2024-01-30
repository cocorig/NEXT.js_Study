import { PostCardProps } from "@/types/Post";
import Link from "next/link";

export const PostCard = ({ post }: PostCardProps) => {
  const { id, title, content, tag } = post;

  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <span className="badge">{tag.name}</span>
          <Link href={`/blog/${id}`} className="hover:underline">
            더보러가기
          </Link>
        </div>
      </div>
    </div>
  );
};
