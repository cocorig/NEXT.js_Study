"use client";
import style from "./tab.module.css";
import { useTabContext } from "../TabProvider";
export default function Tab() {
  const { tab, setTab } = useTabContext();

  const onClickRec = () => {
    setTab("rec");
  };
  const onClickFol = () => {
    setTab("fol");
  };
  console.log(tab);
  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      {/* Tab */}
      <div className={style.homeTab}>
        {/* Tab 1 */}
        <div onClick={onClickRec}>
          추천
          <div className={style.tabIndicator} hidden={tab === "fol"}></div>
        </div>
        {/* Tab 2 */}
        <div onClick={onClickFol}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === "rec"}></div>
        </div>
      </div>
    </div>
  );
}
