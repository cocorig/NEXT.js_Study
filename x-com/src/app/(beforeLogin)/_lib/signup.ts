"use server";
import { redirect } from "next/navigation";

export async function onSubmit(prevState: any, formData: FormData) {
  // formData 검증
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }

  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include", // 쿠키전달,로그인한 사람이 회원가입할 때
      }
    );

    if (response.status === 403) {
      return { message: "user_exists" };
    }
    console.log(await response.json());
    shouldRedirect = true;
  } catch (error) {
    console.error(error);
    return;
  }
  if (shouldRedirect) {
    redirect("/home");
  }
}
