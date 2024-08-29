import express from "express";
import cors from "cors";
import connectDB from "./Config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddler.js";

const app = express();
const port = 5000;

// Connect to MongoDB
connectDB(port);

//Enable CORS
app.use(cors());
//app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", productRoutes);

app.use(notFound);
//app.use(errorHandler);
// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
