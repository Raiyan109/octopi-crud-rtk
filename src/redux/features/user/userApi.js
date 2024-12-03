import { baseApi } from "../../baseApi";

export const userApi = baseApi.enhanceEndpoints({ addTagTypes: ['Users'] }).injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => '/users',
            providesTags: ['Users']
        }),
        getSingleUser: builder.query({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'GET',
            }),
            providesTags: ['Users']
        }),
    })
})

export const { useGetAllUsersQuery, useGetSingleUserQuery } = userApi