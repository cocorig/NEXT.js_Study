import React from "react";
import { connectToDatabase } from "@/utils/connectMongo";
import Language from "./Language";
import BtnContainer from "./BtnContainer";
import { SectionContainer } from "../components/SectionLayout";
import Link from "next/link";
import { ObjectId } from "mongodb";

// 몽고디비에서 가져온 데이터 타입
interface Item {
  _id: ObjectId;
  name: string;
}

interface PageProps {
  searchParams: { page: string };
}

async function getData(perPage: number, page: number) {
  try {
    // db연결
    const client = await connectToDatabase();
    const db = client?.db("programming");
    const items = await db
      ?.collection("coco")
      .find({})
      .skip(perPage * (page - 1))
      .limit(perPage)
      .toArray();
    const itemCount = (await db?.collection("coco").countDocuments({})) || 0;
    const response = { items, itemCount };

    return response;
    // 연결시 해야할 작업
  } catch (error) {
    throw new Error("Failed to connect to Mongo database");
  }
}

// http://localhost:3000/language?page=2
export default async function page({ searchParams }: PageProps) {
  let page = parseInt(searchParams.page, 10);
  // page값이 없거나 1보다 작으면 1로,
  page = !page || page < 1 ? 1 : page;
  const perPage = 9; // 한 페이지 당 가져올 횟수를 제한
  const data = await getData(perPage, page);
  const totalPages = Math.ceil(data.itemCount / perPage);

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  const isPageOutOfRange = page > totalPages;
  const pageNumber = [];
  const offsetNumber = 3;
  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumber.push(i);
    }
    console.log(pageNumber);
  }
  //8
  // if (page - 1 > 0) {
  //   prevPage = page - 1;
  // } else {
  //   prevPage = 1;
  // }
  return (
    <SectionContainer title="Programming Language">
      {/* {searchParams.page} */}
      {/* {totalPages} */}
      {/* {perPage * (page - 1)} */}
      <BtnContainer>
        {data.items?.map((item) => (
          <li key={item._id.toString()}>
            <Language name={item.name} />
          </li>
        ))}
      </BtnContainer>
      {isPageOutOfRange ? (
        <div>no data</div>
      ) : (
        <div>
          {page === 1 ? (
            <div aria-disabled>이전 </div>
          ) : (
            <Link href={`?page=${prevPage}`} aria-label="Prev Page">
              이전
            </Link>
          )}
          <div>
            {pageNumber.map((pageNumber, index) => (
              <Link key={index} href={`?page=${pageNumber}`}>
                {pageNumber}
              </Link>
            ))}
          </div>
          {page === totalPages ? (
            <div aria-disabled>다음 </div>
          ) : (
            <Link href={`?page=${nextPage}`} aria-label="Next Page">
              다음
            </Link>
          )}
        </div>
      )}
    </SectionContainer>
  );
}
//  { _id: new ObjectId('...'), name: 'Python' },

// limit이 9일 때
// page=1이면 0~
// page=2면 9~
// page=3이면 18~

//pge === pageNumber 같다면 강조 색

// 총 페이지 5
// < 1 2 3 4 5 >
