import style from "./userCard.module.css";
import Image from "next/image";

interface UserCardProps {
  id: string;
  nickname: string;
  image: string;
}

export default function UserCard({ id, nickname, image }: UserCardProps) {
  return (
    <div className={style.container}>
      <div className={style.userImage}>
        <Image src={image} alt={id} width={40} height={40} />
      </div>
      <div className={style.userName}>
        <span>{nickname}</span>
        <span>@{id}</span>
      </div>
    </div>
  );
}
