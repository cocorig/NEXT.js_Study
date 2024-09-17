import Messages from "@/components/Messages";
import { getMessages } from "@/lib/messages";
// import { unstable_noStore } from "next/cache";
// export const revalidate = 5
// export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  // unstable_noStore();
  // const response = await fetch("http://localhost:8080/messages", {
  //   // 캐시된 데이터에 연결, 이 태그로 revalidateTag를 호출하면 해당 태그가 있는 모든 캐시된 데이터를 재검증하고 폐기한다. revalidatePath로 여러개의 페이지를 사용하는 것보다, tags의 문자열 배열에 재검증할 페이지의 태그를 사용할 수 있다.
  //   next: { tags: ["msg"] },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
