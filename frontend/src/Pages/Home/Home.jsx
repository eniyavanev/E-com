import React from "react";
//import products from "../../Components/product";
import Products from "../Products/Products";
import axios from "axios";
import { useGetProductsQuery } from "../../StateManagement/Slices/productSlice";

const Home = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  // if(isLoading){
  //   return <div>Loading...</div>
  // }
  // if(error){
  //   return <div>{`Error - ${error.message}`}</div>
  // }
  return (
    <div className="container py-2 bg-gradient-to-r from-teal-400 to-emerald-300">
      <h1 className="text-3xl font-bold my-3">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {products?.map((product) => (
          <Products product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
