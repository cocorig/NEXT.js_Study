import { MongoClient } from "mongodb";

const MONGODB_URL: string | undefined = process.env.MONGODB_URL;
let client: MongoClient | null = null;

export async function connectToDatabase(): Promise<MongoClient | null> {
  if (client) {
    return client;
  }

  if (!MONGODB_URL) {
    console.log("MONGODB URL not found");
    return null;
  }

  try {
    client = await MongoClient.connect(MONGODB_URL);

    console.log("Connected to MongoDB");
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB ", error);
    return null;
  }
}
