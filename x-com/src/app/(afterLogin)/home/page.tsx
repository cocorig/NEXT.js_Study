import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import Tab from "./_component/tab/Tab";
import { TabProvider } from "./_component/TabProvider";
import PostForm from "./_component/post/PostForm";
import { getPostRecommends } from "./_lib/getPostRecommends";
import { queryKeys } from "@/react-query/constants";
import style from "./home.module.css";
import TabDecider from "./_component/TabDecider";

export default async function Home() {
  // 서버 데이터 -> queryClient
  const queryClient = new QueryClient();
  // 서버쪽에서 무한 스크롤 prefetchInfiniteQuery
  await queryClient.prefetchInfiniteQuery({
    queryKey: [queryKeys.posts, queryKeys.recommends],
    queryFn: getPostRecommends,
    initialPageParam: 0,
  });
  const dehydrateState = dehydrate(queryClient);
  // queryClient.getQueryData(["posts", "recommends"]) 값 얻기 -> 다른 컴포넌트에서도 사용가능
  // queryClient.setQueryData(["posts", "recommends"]) 값 수정

  // dehydrate란 서버에서 온 데이터를 클라이언트에서 형식에 맞게 물려받는다.
  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydrateState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <TabDecider />
        </TabProvider>
      </HydrationBoundary>
    </div>
  );
}
