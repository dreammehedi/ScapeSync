import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getUserToken } from "../../utils/handleUserToken";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apitest.softvencefsd.xyz/api/",
    prepareHeaders: (headers) => {
      const token = getUserToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  keepUnusedDataFor: 60,
  tagTypes: ["User"],
  endpoints: () => ({}),
});
