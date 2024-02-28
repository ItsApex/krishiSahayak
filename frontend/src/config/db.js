import mongoose, { connect } from "mongoose";
const MONGODB_URI = `mongodb+srv://rohit:rohit@rohit.jycmuwe.mongodb.net/`;
const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error while connection was: ${err.message}`);
    // process.exit(1);
  }
};

export default dbConnect;
