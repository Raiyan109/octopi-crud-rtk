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
        createUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['Users']
        }),
        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users']
        }),
        updateUser: builder.mutation({
            query: ({ userId, ...user }) => ({
                url: `/users/${userId}`,
                method: 'PUT',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
    })
})

export const { useGetAllUsersQuery, useGetSingleUserQuery, useCreateUserMutation, useDeleteUserMutation, useUpdateUserMutation } = userApi