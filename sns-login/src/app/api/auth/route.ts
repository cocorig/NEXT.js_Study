import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const receivedData = req.body.Data;
      // 받은 데이터를 이용한 POST 요청 처리 로직
      console.log("Received POST request data:", receivedData);

      res
        .status(200)
        .json({ message: "Received and processed POST data successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to process POST data" });
    }
  } else if (req.method === "GET") {
    try {
      // GET 요청 처리 로직
      console.log("Received GET request");

      res.status(200).json({ message: "Received GET request successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to process GET request" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
