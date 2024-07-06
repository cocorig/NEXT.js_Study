import style from "./followSection.module.css";
import FollowRecommend from "./FollowRecommend";
export default function FollowSection() {
  return (
    <div className={style.followRecommend}>
      <h3>팔로우 추천</h3>
      <FollowRecommend />
      <FollowRecommend />
      <FollowRecommend />
    </div>
  );
}
