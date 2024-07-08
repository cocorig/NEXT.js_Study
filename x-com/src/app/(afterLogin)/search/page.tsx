import style from "./search.module.css";
import BackButton from "@/app/(afterLogin)/_component/button/BackButton";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Tab from "./_component/Tab";
import Post from "../_component/post/Post";
//  최신텝 :   search?q=곽튜브&src=typed_query&f=live
// 곽튜브 검색 주소창 /search?q=곽튜브&src=typed_query&f=top

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};

export default function Search({ searchParams }: Props) {
  return (
    <main className={style.main}>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton />
          </div>
          <div className={style.formZone}>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className={style.list}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/*<SearchResult searchParams={searchParams} />*/}
      </div>
    </main>
  );
}
