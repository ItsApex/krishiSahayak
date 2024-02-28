// db.js

import { MongoClient } from "mongodb";

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  try {
    const client = await MongoClient.connect(
      "mongodb+srv://aryansingh:LQMbEW2WdyLgRhpt@kisan.nhi8cjd.mongodb.net/?retryWrites=true&w=majority&appName=Kisan",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const db = client.db(process.env.DB_NAME);

    cachedClient = { client, db };

    return cachedClient;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
}
