import React from "react";
import ButtonAction from "@/components/ButtonAction";
import BackButton from "@/components/BackButton";
import { db } from "@/lib/db";
import { FC } from "react";
import { ParamsProps } from "@/types/Post";

async function getPost(id: string) {
  const response = await db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });
  return response;
}
const BlogDetailPage: FC<ParamsProps> = async ({ params }) => {
  const post = await getPost(params.id);
  const { title, content, tag, id } = post;
  console.log(post);
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">{title}</h2>
      </div>
      <p className="text-slate-700 mb-4">{content}</p>
      <div className="badge badge-outline">{tag.name}</div>
      <ButtonAction id={id} />
    </div>
  );
};

export default BlogDetailPage;
