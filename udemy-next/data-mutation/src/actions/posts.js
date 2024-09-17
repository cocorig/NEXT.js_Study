"use server";

import { revalidatePath } from "next/cache";
import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";

import { redirect } from "next/navigation";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  // 하나라도 충족하면 에러
  const errors = {};

  if (isInvalidText(title)) {
    errors.title = "제목은 필수 항목입니다.";
  }
  if (isInvalidText(content)) {
    errors.content = "내용은 필수 항목입니다.";
  }
  // 이미지는 항상 객체이기 때문에 아무것도 제출하지 않아도 !{} (false) 에 해당하지 않는다. image.size === 0 파일 크기로 제출했는지 알수있다.
  /*
File {
  size: 0,
  type: 'application/octet-stream',
  name: 'undefined',
  lastModified: 1726400150686
} */
  if (!image || image.size === 0) {
    errors.image = "이미지는 필수 항목입니다.";
  }
  if (title.length >= 20) {
    errors.title = "제목은 20자 이내로 입력해 주세요.";
  }
  if (content.length >= 50) {
    errors.content = "내용은 50자 이내로 입력해 주세요.";
  }

  // 에러가 있으면 반환
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error("Image upload failed ");
  }

  await storePost({
    imageUrl,
    title,
    content,
    userId: 1,
  });

  revalidatePath("/", "layout"); // 모든 페이지가 재검증되면서 최신 데이터를 받을 수 있게 함

  redirect("/feed");
}

// 에러가 있는 객체를 반환-> 클라이언트 측에서 처리 -> useActionState 훅 활용

export async function togglePostLikeStatus(postId) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/", "layout"); // 데이터베이스 업데이트를 감지하지 못해서 페이지가 바로 업데이트 되지않는다.  특정 페이지를 재검증해야 할 때
}
// 루트 레이아웃에 감싸진 모든 페이지가 재검증된다.
