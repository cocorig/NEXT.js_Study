import style from "./userCard.module.css";
import UserImage from "./UserImage";
import { User } from "@/model/User";

export default function UserCard({ id, nickname, image }: User) {
  return (
    <div className={style.container}>
      <UserImage userId={id} userImg={image} />
      <div className={style.userName}>
        <span>{nickname}</span>
        <span>@{id}</span>
      </div>
    </div>
  );
}
