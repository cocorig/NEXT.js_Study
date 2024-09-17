import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

// db 이름을 가져옴
const db = sql("meals.db");

export async function getMeals() {
  // 임시 지연 시뮬레이션
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  //--------이미지 처리----------
  // 업로드 이미지 확장자 받기
  const extension = meal.image.name.split(".").pop();
  // 이미지 파일명 만들기
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);

  //  이미지를 Buffer로 변환,arrayBuffer함수는 프로미스를 반환하고 변환
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals (title,image,summary,instructions, creator, creator_email, slug)
    VALUES (  
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @slug
      )
    `
  ).run(meal);
}
