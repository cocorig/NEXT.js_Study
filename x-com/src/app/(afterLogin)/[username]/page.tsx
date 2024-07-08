import style from "./profile.module.css";
import Post from "../_component/post/Post";
import BackButton from "../_component/button/BackButton";

export default function Profile() {
  const user = {
    id: "ha_ye0ni",
    nickname: "이하연",
    image: "/profile.jpeg",
  };
  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
