import mongoose from "mongoose";

const connection = {};

const dbURUI = process.env.MONGODB_URI.toString();

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  // connect to db
  const db = await mongoose.connect(dbURUI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("DB Connected");

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
