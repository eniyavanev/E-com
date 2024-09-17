import express from "express";
import cors from "cors";
import connectDB from "./Config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddler.js";
import dotenv from "dotenv";
import products from  "./data/products.js";
dotenv.config();


const app = express();

// Connect to MongoDB
connectDB();

//Enable CORS
app.use(cors());
//parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//port
const port = process.env.PORT ;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/products", (req, res) => {
  res.json(products);
})

app.use("/api", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
//app.use(errorHandler);
// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
