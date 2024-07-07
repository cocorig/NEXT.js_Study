import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "../button/ActionButtons";
import style from "./post.module.css";

// https://day.js.org/
dayjs.locale("ko"); // 한글화
dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    User: {
      id: "haha",
      nickname: "coco",
      image: "/profile.jpeg",
    },
    content: "고양이 구경하고 가세요~",
    createdAt: new Date(),
    Images: [],
  };

  return (
    <article className={style.post}>
      <div className={style.postWrapper}>
        {/* postUserSection */}
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <Image
              src={target.User.image}
              alt={target.User.nickname}
              width={40}
              height={40}
            />
            <div className={style.postShade} />
          </Link>
        </div>
        {/* postBody */}
        <div className={style.postBody}>
          {/* postMeta */}
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          {/* postContent */}
          <div>{target.content}</div>
          {/* postImage */}
          <div className={style.postImageSection}></div>
        </div>
      </div>
      {/* buttonGroups */}
      <ActionButtons />
    </article>
  );
}
