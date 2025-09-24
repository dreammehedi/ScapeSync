import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apitest.softvencefsd.xyz/api/",
  }),
  keepUnusedDataFor: 60,
  tagTypes: ["User"],
  endpoints: () => ({}),
});
