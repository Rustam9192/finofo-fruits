import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fruitsApi = createApi({
  reducerPath: "fruitsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getFruits: builder.query({
      query: () => `/`,
    }),
  }),
});

export const { useGetFruitsQuery } = fruitsApi;
