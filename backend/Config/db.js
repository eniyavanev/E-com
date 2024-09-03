//mongodb+srv://eniyavan:12345@e-com.2i5fi.mongodb.net/

import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

const connectDB = async(port) => {
try{

    const connect  = await mongoose.connect("mongodb+srv://eniyavan:12345@e-com.2i5fi.mongodb.net/e-com")
    console.log(`MongoDB Connected on ${port}`)
}catch(err) {
    console.log(`Error: ${err.message}`)
    process.exit(1)
}
}


export default connectDB