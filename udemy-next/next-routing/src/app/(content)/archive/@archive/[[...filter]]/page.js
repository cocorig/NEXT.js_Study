import { Suspense } from "react";
import Link from "next/link";

import NewsList from "@/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  // 선택된 연도는 있지만 유효하지 않은 연도이거나 선택된 월이 있지만 사용가능한 월을 얻지 못한다면,하나라도 true라면 에러를 던짐
  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("invalid filter");
  }

  // 연도만 선택했을 때, news컨텐츠는 연도별 뉴스만, 링크는 월별로 나오게
  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }
  // 연도와 월이 있을 때
  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
async function FilteredNews({ year, month }) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  // 중요: 조건에 맞는 news가 없을 때
  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
}

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter; // 일치하는 모든 경로 세그먼트의 배열

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>

      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
// loading파일은 전체 페이지 컴포넌트가 데이터를 가져오는 경우에만 대체되는데, 데이터를 다시 가져오는 경우엔 대체할 수 없다. 그래서 Suspense로 세밀하게 관리할 수 있다.
