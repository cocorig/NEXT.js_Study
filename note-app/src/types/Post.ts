import { Tag } from "@prisma/client";
export interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    tag: Tag;
  };
}
export interface ParamsProps {
  params: {
    id: string;
  };
}
