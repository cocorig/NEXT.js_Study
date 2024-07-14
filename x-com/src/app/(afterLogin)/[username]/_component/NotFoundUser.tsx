import BackButton from "../../_component/button/BackButton";
import style from "./notFoundUser.module.css";

type Props = {
  params: string;
};
export default function NotFoundUser({ params }: Props) {
  console.log(params);
  return (
    <>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>프로필</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}></div>
        <div className={style.userName}>
          <div>@</div>
        </div>
      </div>
    </>
  );
}
