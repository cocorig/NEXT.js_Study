import { getMessages } from "@/lib/messages";
export default async function MessagesLayout({ children }) {
  // api로 가져오는 경우
  // const response = await fetch("http://localhost:8080/messages");
  // const messages = await response.json();

  // 데이터베이스에서 직접 가져오는 경우
  const messages = await getMessages();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
