import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../../constants";

const baseQuery = fetchBaseQuery({baseUrl:BASE_URL})
export const apiSlice = createApi({
    // reducerPath:"apiSlice",
    baseQuery,
    endpoints:(builder) => ({})
})

//export const {useGetDataQuery} = apiSlice;
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { BASE_URL } from "../../../constants";

// const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
// export const apiSlice = createApi({
//   reducerPath: "apiSlice",
//   baseQuery,
//   endpoints: (builder) => ({
//     //get all data
//     getData: builder.query({
//       query: () => ({
//         url: "todos",
//         method: "GET",
//       }),
//     }),
//     // get data by id
//     getDataById: builder.query({
//       query: (id) => ({
//         url: `todos/${id}`,
//         method: "GET",
//       }),
//       //post data
//       postData: builder.mutation({
//         query: (data) => ({
//           url: "todos",
//           method: "POST",
//           body: data,
//         }),
//       }),
//     }),
//   }),
// });

// export const { useGetDataQuery } = apiSlice;
