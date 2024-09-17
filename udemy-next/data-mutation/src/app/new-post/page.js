import PostForm from "@/components/PostForm";

import { createPost } from "@/actions/posts";

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
// 서버 컴포넌트 ->(서버 액션)-> 클라이언트 컴포넌트
