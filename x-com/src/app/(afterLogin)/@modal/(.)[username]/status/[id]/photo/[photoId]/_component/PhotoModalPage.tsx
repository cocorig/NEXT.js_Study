import style from "../photoModal.module.css";
import CommentForm from "@/app/(afterLogin)/[username]/_component/CommentForm";
import PhotoModalCloseButton from "./PhotoModalCloseButton";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { queryKeys } from "@/react-query/constants";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import { getComments } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getComments";
import ImageZone from "./ImageZone";
import Comments from "@/app/(afterLogin)/[username]/status/[id]/_component/Comments";
import SinglePost from "@/app/(afterLogin)/[username]/status/[id]/_component/SinglePost";

// type Props = {
//   imageId: number;
//   link: string;
//   Post: {
//     content: string;
//   };
// };

type Props = {
  id: string;
};
export default async function PhotoModalPage({ id }: Props) {
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
    <div className={style.container}>
      <HydrationBoundary state={dehydratedState}>
        <PhotoModalCloseButton />
        {/* 이미지 섹션 */}
        <ImageZone id={id} />
        {/* 댓글 섹션*/}
        <div className={style.commentZone}>
          <SinglePost id={id} noImage />
          <CommentForm id={id} />
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
