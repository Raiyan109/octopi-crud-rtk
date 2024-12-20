import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://wesoftin-backend.vercel.app' }),
    tagTypes: ['Users'],
    endpoints: () => ({})
})