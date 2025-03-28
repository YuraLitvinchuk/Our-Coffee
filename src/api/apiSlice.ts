import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICoffeeItem } from "../types/coffeeItem";

export const coffeeApi = createApi({
  reducerPath: "coffeeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL || "http://localhost:5000",
  }),
  tagTypes: ["Coffee"],
  endpoints: (builder) => ({
    getCoffeeList: builder.query<ICoffeeItem[], void>({
      query: () => "/coffee",
      providesTags: ["Coffee"],
    }),
  }),
});

export const { useGetCoffeeListQuery } = coffeeApi;
