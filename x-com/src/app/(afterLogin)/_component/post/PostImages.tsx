import Link from "next/link";
import cx from "classnames";
import style from "./postImages.module.css";
type Props = {
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    //Todo : Images 타입 변경
    Images: any[];
  };
};

export default function PostImages({ post }: Props) {
  // 빠르게 조건처리,이미지가 없을 때 null 반환
  if (!post.Images || post.Images.length === 0) return null;

  // 이미지 수에 따라 렌더링 분기
  switch (post.Images.length) {
    case 1:
      return (
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className={cx(style.postImageSection, style.oneImage)}
          style={{
            backgroundImage: `url(${post.Images[0]?.link})`,
            backgroundSize: "contain",
          }}
        >
          <img src={post.Images[0]?.link} alt="" />
        </Link>
      );

    case 2:
      return (
        <div className={cx(style.postImageSection, style.twoImage)}>
          {post.Images.map((image) => (
            <Link
              key={image.imageId}
              href={`/${post.User.id}/status/${post.postId}/photo/${image.imageId}`}
              style={{
                backgroundImage: `url(${image.link})`,
                backgroundSize: "cover",
              }}
            />
          ))}
        </div>
      );

    case 3:
      return (
        <div className={cx(style.postImageSection, style.threeImage)}>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
            style={{
              backgroundImage: `url(${post.Images[0]?.link})`,
              backgroundSize: "cover",
            }}
          />
          <div>
            {post.Images.slice(1).map((image) => (
              <Link
                key={image.imageId}
                href={`/${post.User.id}/status/${post.postId}/photo/${image.imageId}`}
                style={{
                  backgroundImage: `url(${image.link})`,
                  backgroundSize: "cover",
                }}
              />
            ))}
          </div>
        </div>
      );

    case 4:
      return (
        <div className={cx(style.postImageSection, style.fourImage)}>
          {post.Images.map((image) => (
            <Link
              key={image.imageId}
              href={`/${post.User.id}/status/${post.postId}/photo/${image.imageId}`}
              style={{
                backgroundImage: `url(${image.link})`,
                backgroundSize: "cover",
              }}
            />
          ))}
        </div>
      );

    default:
      return null;
  }
}
