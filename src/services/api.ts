import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pratos } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getMenu: builder.query<Pratos, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getPrato: builder.query<Pratos[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetMenuQuery, useGetPratoQuery } = api

export default api
