import Link from "next/link";
import Image from "next/image";

import classes from "./mealItem.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill priority />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
//  이미지 속성 fill : nextjs에 가능한 공간을 부모 컴포넌트에 의해 정의된 ㄱㅇ간을 이미지로 채운다. 데이터베이스에서 받아온 이미지로 업로드 하기 때문에 사전에 정할 수 없기 때문에 미리 폭이나 넓이를 알지 못할 때 사용한다.

//  폭이나 넓이를 알면 추가하는게 좋다,
