"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import style from "./rightSearchZone.module.css";
import SearchForm from "./SearchForm";

export default function RightSearchZone() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onChangeFollow = () => {
    // search?q=KWaiker96998&f=live&pf=on
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("pf", "on");

    // 뒤에 pf=on만 추가
    router.replace(`/search?${newSearchParams.toString()}`);
  };
  const onChangeAll = () => {
    // url 그대로
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("pf");
    router.replace(`/search?${newSearchParams.toString()}`);
  };

  //explore
  if (pathname === "/explore") {
    return null;
  }
  //search
  if (pathname === "/search") {
    return (
      <div>
        <h5 className={style.filterTitle}>검색 필터</h5>
        <div className={style.filterSection}>
          <div className={style.UserFilter}>
            <label>사용자</label>
            <div className={style.radio}>
              <div>모든 사용자</div>
              <input
                type="radio"
                name="pf"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={style.radio}>
              <div>내가 팔로우하는 사람들</div>
              <input
                type="radio"
                name="pf"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: 60, width: "inherit" }}>
      <SearchForm />
    </div>
  );
}
