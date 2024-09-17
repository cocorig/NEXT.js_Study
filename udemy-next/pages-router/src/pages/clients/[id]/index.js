import { useRouter } from "next/router";
export default function ClientPage() {
  const router = useRouter();
  function handleLoad() {
    // push는
    router.push("/clients/max/project"); // 이동해도 이전 페이지 갈 수 있음
    // router.replace("/clients/max/project"); // 현재 페이지를 이 코드의 페이지로 대체, 페이지 이동 후 되돌아 갈 수 없다.
  }
  return (
    <div>
      <h1>ClientPage</h1>
      <button onClick={handleLoad}>Load Project A</button>
    </div>
  );
}
