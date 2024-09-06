//mongodb+srv://eniyavan:12345@e-com.2i5fi.mongodb.net/

import mongoose from "mongoose";

const connectDB = async () => {
  const mongoDb = process.env.MONGO_URI;
  try {
    const connect = await mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected on ${connect.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
