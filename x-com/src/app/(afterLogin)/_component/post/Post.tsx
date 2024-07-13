import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "../button/ActionButtons";
import PostImages from "./PostImages";
import PostArticle from "./PostArticle";
import style from "./post.module.css";
import { Post as IPost } from "@/model/Post";
// https://day.js.org/
dayjs.locale("ko"); // 한글화
dayjs.extend(relativeTime);

export default function Post(post: IPost) {
  // article 클릭시 /userid/status/postid로 이동 ,post 상세보기

  return (
    <PostArticle post={post}>
      <div className={style.postWrapper}>
        {/* postUserSection */}
        <div className={style.postUserSection}>
          <Link href={`/${post.User.id}`} className={style.postUserImage}>
            <img src={post.User.image} alt={post.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        {/* postBody */}
        <div className={style.postBody}>
          {/* postMeta */}
          <div className={style.postMeta}>
            <Link href={`/${post.User.id}`}>
              <span className={style.postUserName}>{post.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{post.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(post.createdAt).fromNow(true)}
            </span>
          </div>
          {/* postContent */}
          <div>{post.content}</div>
          {/* postImageSection */}
          <div>
            <PostImages post={post} />
          </div>
        </div>
      </div>
      {/* buttonGroups */}
      <ActionButtons />
    </PostArticle>
  );
}
//    /{Userid}/status/{postId}/photo/1
