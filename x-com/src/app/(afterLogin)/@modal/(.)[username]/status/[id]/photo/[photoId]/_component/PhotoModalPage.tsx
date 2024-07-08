import style from "../photoModal.module.css";
import { faker } from "@faker-js/faker";
import Post from "@/app/(afterLogin)/_component/post/Post";
import CommentForm from "@/app/(afterLogin)/[username]/_component/CommentForm";
import ActionButtons from "@/app/(afterLogin)/_component/button/ActionButtons";
import PhotoModalCloseButton from "./PhotoModalCloseButton";

// type Props = {
//   imageId: number;
//   link: string;
//   Post: {
//     content: string;
//   };
// };

export default function PhotoModalPage() {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  };
  return (
    <div className={style.container}>
      <PhotoModalCloseButton />
      {/* 이미지 */}
      <div className={style.imageZone}>
        <img src={photo.link} alt={photo.Post?.content} />
        <div
          className={style.image}
          style={{ backgroundImage: `url(${photo.link})` }}
        />
        <div className={style.buttonZone}>
          <div className={style.buttonInner}>
            <ActionButtons white />
          </div>
        </div>
      </div>
      {/* 댓글 */}
      <div className={style.commentZone}>
        <Post noImage />
        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
