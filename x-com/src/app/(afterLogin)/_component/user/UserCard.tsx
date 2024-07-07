import style from "./userCard.module.css";
import UserImage from "./UserImage";

interface UserCardProps {
  id: string;
  nickname: string;
  image: string;
}

export default function UserCard({ id, nickname, image }: UserCardProps) {
  return (
    <div className={style.container}>
      <UserImage id={id} image={image} />
      <div className={style.userName}>
        <span>{nickname}</span>
        <span>@{id}</span>
      </div>
    </div>
  );
}
