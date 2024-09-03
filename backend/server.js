import express from "express";
import cors from "cors";
import connectDB from "./Config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddler.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;


const app = express();


// Connect to MongoDB
connectDB(process.env.PORT);

//Enable CORS
app.use(cors());
//app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
//app.use(errorHandler);
// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
