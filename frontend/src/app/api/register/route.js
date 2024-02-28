// Import necessary modules
import dbConnect from "../../../config/db";
import User from "../../models/Users";
console.log("this is the registrtion function");
// Define the API route handler
export default async function handler(req, res) {
  // Connect to the database
  dbConnect();

  // Check if the request method is POST
  if (req.method === "POST") {
    const { username, password } = req.body;

    try {
      // Check if the username already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: "Username already exists" });
      }

      // Hash the password (Implement this functionality using bcrypt)

      // Create a new user
      const newUser = new User({
        username,
        password,
      });

      // Save the new user to the database
      await newUser.save();

      // Return a success message
      return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      // Handle errors
      console.error("Error registering user:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Handle requests with methods other than POST
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
