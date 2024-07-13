import style from "./search.module.css";
import BackButton from "@/app/(afterLogin)/_component/button/BackButton";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Tab from "./_component/Tab";
import SearchResult from "./_component/SearchResult";
//  /search?q=곽튜브&f=live -> {q: '곽튜브', f: 'live'}

export type searchParamsProps = {
  searchParams: { q: string; f?: string; pf?: string };
};

export default function Search({ searchParams }: searchParamsProps) {
  console.log("searchParams", searchParams); // { q: '곽튜브', f: 'live' }
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
        {/* 검색 결과 */}
        <SearchResult searchParams={searchParams} />
      </div>
    </main>
  );
}
