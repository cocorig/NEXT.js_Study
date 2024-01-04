import type { NextApiRequest, NextApiResponse } from "next";

type UserData = {
  // 사용자 데이터 타입 정의
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const data: UserData = req.body; // 사용자 데이터 가져오기

      // 여기에서 Firebase 데이터베이스로부터 데이터를 가져오는 등의 로직을 구현

      // 임시로 받은 데이터를 콘솔에 출력
      console.log("Received data:", data);

      res.status(200).json({ message: "Data received successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
