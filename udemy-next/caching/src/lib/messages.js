import { cache } from "react";
import { unstable_cache } from "next/cache";
import sql from "better-sqlite3";

const db = new sql("messages.db");

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message) {
  db.prepare("INSERT INTO messages (text) VALUES (?)").run(message);
}
// cache로 감싸면 데이터베이스에 대한 요청 중복을 막는다. 동일한 요청이면 요청이 하나만 발생함, (fetch함수에 대한 요청이 아님,fetch함수는 동일한 구성이면 자동으로 중복 요청 막음)
export const getMessages = unstable_cache(
  cache(function getMessages() {
    console.log("Fetching messages from db");
    return db.prepare("SELECT * FROM messages").all();
  }),
  ["messages"],
  {
    tags: ["msg"],
  }
);
// cache가 감싼 함수가 처음 호출될 때 반환된 데이터를 리액트가 캐싱한다. 그래서 어디서든 getMessages에 요청을 보내면 계속 이 응답을 재사용한다.
