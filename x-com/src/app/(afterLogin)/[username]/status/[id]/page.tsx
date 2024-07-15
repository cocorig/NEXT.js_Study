import BackButton from "@/app/(afterLogin)/_component/button/BackButton";
import style from "./singlePost.module.css";
import CommentForm from "../../_component/CommentForm";
import SinglePost from "./_component/SinglePost";
import Comments from "./_component/Comments";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { queryKeys } from "@/react-query/constants";
import { getSinglePost } from "./_lib/getSinglePost";
import { getComments } from "./_lib/getComments";

type Props = {
  params: { id: string };
};
export default async function page({ params }: Props) {
  const { id } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [queryKeys.posts, id],
    queryFn: getSinglePost,
  });
  await queryClient.prefetchQuery({
    queryKey: [queryKeys.posts, id, queryKeys.comments],
    queryFn: getComments,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>게시하기</h3>
        </div>
        <SinglePost id={id} />
        <CommentForm id={id} />
        {/* 댓글섹션 */}
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
