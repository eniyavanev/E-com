import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import Product from "../Models/productModel.js";

//fetch all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  if (products) {
    return res.status(200).json(products);
  } else {
    return res.status(404).json({ message: "Products not found" });
  }
});

//fetch single product
const getProductById = asyncHandler(async (req, res) => {
  // Check if the ID is a valid ObjectId before querying the database
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).json({ message: "No product with that ID" });
  }
  const product = await Product.findById(req.params.id);
  console.log(product);
  
  if (product) {
    return res.status(200).json( { product: product} );
  } else {
    return res.status(404).json({ message: "Product not found" });
  }
});
export { getProducts, getProductById };
