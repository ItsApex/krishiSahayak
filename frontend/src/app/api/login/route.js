// pages/api/login.js

import dbConnect from "../../config/db";
import User from "../../models/Users";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { username, password } = req.body;

    try {
      // Find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      // Check if the password matches

      // Return a success message or token for authentication
      return res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Error logging in user:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
