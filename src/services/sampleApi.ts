import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const sampleApi = createApi({
  reducerPath: 'sampleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page: number = 1) => `users?page=${page}`,
    }),
  }),
})

export const { useGetUsersQuery } = sampleApi