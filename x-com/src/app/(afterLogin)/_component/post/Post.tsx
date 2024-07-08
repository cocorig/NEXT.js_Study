import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "../button/ActionButtons";
import PostImages from "./PostImages";
import PostArticle from "./PostArticle";
import style from "./post.module.css";
import { faker } from "@faker-js/faker";
// https://day.js.org/
dayjs.locale("ko"); // 한글화
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
};

export default function Post({ noImage }: Props) {
  const target = {
    User: {
      id: "haha",
      nickname: "coco",
      image: "/profile.jpeg",
    },
    postId: 1432244242353453,
    content: "고양이 구경하고 가세요~",
    createdAt: new Date(),
    Images: [] as any[],
  };
  // 이미지 없을 경우 테스트, 반반의 확률로 계산
  if (Math.random() > 0.5 && !noImage) {
    target.Images.push(
      { imageId: 1, link: faker.image.urlLoremFlickr() },
      { imageId: 2, link: faker.image.urlLoremFlickr() }
      //{ imageId: 3, link: faker.image.urlLoremFlickr() }
      // { imageId: 4, link: faker.image.urlLoremFlickr() }
    );
  }
  // article 클릭시 /userid/status/postid로 이동 ,post 상세보기
  return (
    <PostArticle post={target}>
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
          {/* postImageSection */}
          <div>
            <PostImages post={target} />
          </div>
        </div>
      </div>
      {/* buttonGroups */}
      <ActionButtons />
    </PostArticle>
  );
}
//    /{Userid}/status/{postId}/photo/1
