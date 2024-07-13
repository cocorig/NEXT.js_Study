import style from "./userImage.module.css";
import Image from "next/image";

interface UserImageProps {
  userId: string;
  userImg: string;
}

export default function UserImage({ userId, userImg }: UserImageProps) {
  return (
    <div className={style.userImage}>
      <img src={userImg} alt={userId} width={40} height={40} />
    </div>
  );
}
