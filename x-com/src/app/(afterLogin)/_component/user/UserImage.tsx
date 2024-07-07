import style from "./userImage.module.css";
import Image from "next/image";

interface UserImageProps {
  id: string;
  image: string;
}

export default function UserImage({ id, image }: UserImageProps) {
  return (
    <div className={style.userImage}>
      <Image src={image} alt={id} width={40} height={40} />
    </div>
  );
}
