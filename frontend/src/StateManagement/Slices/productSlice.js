import { PRODUCTS_URL, PRODUCT_URL } from "../../../constants";
import { apiSlice } from "./apiSlice";


const productSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getProducts:builder.query({
            query:() => ({
                url:PRODUCTS_URL,
                method:"GET"
            })
        }),
        getProductById:builder.query({
            query:(id) => ({
                url:`${PRODUCT_URL}/${id}`  ,
                method:"GET"
            })
        }),
    })
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productSlice