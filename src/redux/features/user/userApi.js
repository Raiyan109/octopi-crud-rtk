import { baseApi } from "../../baseApi";

export const userApi = baseApi.enhanceEndpoints({ addTagTypes: ['Users'] }).injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => '/users',
            providesTags: ['Users']
        })
    })
})

export const { useGetAllUsersQuery } = userApi